import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8ob8cb-p.css';
import '../../css/r/r8tb_9mja.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v8ob8cb-p"/><path class="r8tb_9mja"/></g>`,
		"fallback": "streamline-flex:upload-box-1",
	});
}

export default Component;
