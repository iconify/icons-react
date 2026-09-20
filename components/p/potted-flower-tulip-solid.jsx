import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir_jl2baq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ir_jl2baq"/>`,
		"fallback": "streamline:potted-flower-tulip-solid",
	});
}

export default Component;
