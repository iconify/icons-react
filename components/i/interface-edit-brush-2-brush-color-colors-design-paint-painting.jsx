import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9y_jdb4k.css';
import '../../css/h/hfyylxbyr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j9y_jdb4k"/><path class="hfyylxbyr"/></g>`,
		"fallback": "streamline:interface-edit-brush-2-brush-color-colors-design-paint-painting",
	});
}

export default Component;
