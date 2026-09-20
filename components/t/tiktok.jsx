import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j0qm-ob5o.css';
import '../../css/y/yivttkrvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j0qm-ob5o"/><path class="yivttkrvg"/></g>`,
		"fallback": "streamline-flex:tiktok",
	});
}

export default Component;
