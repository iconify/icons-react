import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe4d_o0pu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe4d_o0pu"/>`,
		"fallback": "devicon-plain:wasp",
	});
}

export default Component;
