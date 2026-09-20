import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lu-_8rbsl.css';
import '../../css/q/qwee23zpz.css';
import '../../css/l/l4g8d1bou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lu-_8rbsl"/><path class="qwee23zpz"/><path class="l4g8d1bou"/></g>`,
		"fallback": "streamline:parliament",
	});
}

export default Component;
