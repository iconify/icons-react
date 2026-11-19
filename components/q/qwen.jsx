import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd4pa2b0i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd4pa2b0i"/>`,
		"fallback": "devicon-plain:qwen",
	});
}

export default Component;
