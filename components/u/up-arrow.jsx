import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yc3mgcbcd.css';
import '../../css/y/ycqvuzb7e.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yc3mgcbcd"/><path class="ycqvuzb7e"/></g>`,
		"fallback": "marketeq:up-arrow",
	});
}

export default Component;
