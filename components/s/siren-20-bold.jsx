import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-0g-v3zq.css';
import '../../css/l/lnh0e5bqw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-0g-v3zq"/><path class="lnh0e5bqw"/>`,
		"fallback": "energy-icons:siren-20-bold",
	});
}

export default Component;
