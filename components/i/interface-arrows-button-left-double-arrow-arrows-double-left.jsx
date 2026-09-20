import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ayhdwc8yh.css';
import '../../css/d/drq6spbru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ayhdwc8yh"/><path class="drq6spbru"/></g>`,
		"fallback": "streamline:interface-arrows-button-left-double-arrow-arrows-double-left",
	});
}

export default Component;
