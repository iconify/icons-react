import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f-coc1bmx.css';
import '../../css/q/q-hy4ebyv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f-coc1bmx"/><path class="q-hy4ebyv"/></g>`,
		"fallback": "streamline:spotify",
	});
}

export default Component;
