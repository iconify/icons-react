import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ow2fr6b4f.css';
import '../../css/a/aq3u3ivpf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ow2fr6b4f"/><path class="aq3u3ivpf"/></g>`,
		"fallback": "streamline:paint-palette",
	});
}

export default Component;
