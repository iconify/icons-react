import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x-wsw6xma.css';
import '../../css/a/a650_jbyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x-wsw6xma"/><path class="a650_jbyx"/></g>`,
		"fallback": "streamline:interface-time-clock-hand-hand-clock-time-give-human-person",
	});
}

export default Component;
