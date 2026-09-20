import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rml6qp2qn.css';
import '../../css/y/ys2dxs54b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rml6qp2qn"/><path class="ys2dxs54b"/></g>`,
		"fallback": "streamline:politics-vote-2",
	});
}

export default Component;
