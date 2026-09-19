import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drn_i5bsp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drn_i5bsp"/>`,
		"fallback": "devicon-plain:junit",
	});
}

export default Component;
