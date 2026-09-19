import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6s0uv0ns.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6s0uv0ns"/>`,
		"fallback": "devicon-plain:spack",
	});
}

export default Component;
