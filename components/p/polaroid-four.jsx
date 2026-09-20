import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/be6w3lb8u.css';
import '../../css/t/t1lvoxvsf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="be6w3lb8u"/><path class="t1lvoxvsf"/></g>`,
		"fallback": "streamline-flex:polaroid-four",
	});
}

export default Component;
