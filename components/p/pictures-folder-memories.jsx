import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kmmg87xhx.css';
import '../../css/i/iafhy2rfj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kmmg87xhx"/><path class="iafhy2rfj"/></g>`,
		"fallback": "streamline:pictures-folder-memories",
	});
}

export default Component;
