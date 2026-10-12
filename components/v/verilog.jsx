import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvpbptb5c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvpbptb5c"/>`,
		"fallback": "devicon:verilog",
	});
}

export default Component;
