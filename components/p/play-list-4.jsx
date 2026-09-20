import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zb9yqkbzw.css';
import '../../css/y/yivttkrvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zb9yqkbzw"/><path class="yivttkrvg"/></g>`,
		"fallback": "streamline-flex:play-list-4",
	});
}

export default Component;
