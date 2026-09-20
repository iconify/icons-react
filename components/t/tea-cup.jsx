import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/syx38htpu.css';
import '../../css/g/g3-oxpgnl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="syx38htpu"/><path class="g3-oxpgnl"/></g>`,
		"fallback": "streamline-flex:tea-cup",
	});
}

export default Component;
