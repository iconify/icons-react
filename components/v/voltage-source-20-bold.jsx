import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1aumdb7c.css';
import '../../css/a/a8jlsdb4l.css';
import '../../css/m/mj6ibrhop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1aumdb7c"/><path class="a8jlsdb4l"/><path class="mj6ibrhop"/>`,
		"fallback": "energy-icons:voltage-source-20-bold",
	});
}

export default Component;
