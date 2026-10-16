import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abw1tpbib.css';
import '../../css/f/fsolhac6a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abw1tpbib"/><path class="fsolhac6a"/>`,
		"fallback": "energy-icons:landslide-20",
	});
}

export default Component;
