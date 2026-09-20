import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e5-omtbsh.css';
import '../../css/u/u2m-y9pev.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e5-omtbsh"/><path class="u2m-y9pev"/></g>`,
		"fallback": "streamline-flex:tune-adjust-volume",
	});
}

export default Component;
