import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zqgxwn5df.css';
import '../../css/s/sv77y4qyo.css';
import '../../css/s/sj01gro5t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zqgxwn5df"/><rect class="sv77y4qyo"/><path class="sj01gro5t"/></g>`,
		"fallback": "streamline:interface-pad-lock-shield-combination-combo-lock-locked-padlock-secure-security-shield-square",
	});
}

export default Component;
