import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wx1jfxbpk.css';
import '../../css/j/jgksjebri.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wx1jfxbpk"/><path class="jgksjebri"/></g>`,
		"fallback": "streamline:skull-1",
	});
}

export default Component;
