import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhfn3yyhb.css';
import '../../css/o/of8os1b2d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhfn3yyhb"/><path class="of8os1b2d"/>`,
		"fallback": "energy-icons:owl-20",
	});
}

export default Component;
