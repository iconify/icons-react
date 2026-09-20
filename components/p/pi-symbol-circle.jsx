import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-_1uigqo.css';
import '../../css/f/fwr_23v4y.css';
import '../../css/c/c2pt0nkql.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y-_1uigqo"/><path class="fwr_23v4y"/><path class="c2pt0nkql"/></g>`,
		"fallback": "streamline:pi-symbol-circle",
	});
}

export default Component;
