import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g5vuqacpt.css';
import '../../css/p/pnkpf5b4r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g5vuqacpt"/><path class="pnkpf5b4r"/></g>`,
		"fallback": "streamline-flex:soft-drink-can",
	});
}

export default Component;
