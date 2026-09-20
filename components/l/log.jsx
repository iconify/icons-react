import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b-cwa6bku.css';
import '../../css/r/roo352xpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b-cwa6bku"/><path class="roo352xpg"/></g>`,
		"fallback": "streamline:log",
	});
}

export default Component;
