import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p_jaxhbai.css';
import '../../css/r/r8xag6bqx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p_jaxhbai"/><path class="r8xag6bqx"/></g>`,
		"fallback": "streamline:return-2",
	});
}

export default Component;
