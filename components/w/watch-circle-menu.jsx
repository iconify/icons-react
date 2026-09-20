import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d0dt3eh6d.css';
import '../../css/w/wyjd3hmks.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d0dt3eh6d"/><path class="wyjd3hmks"/></g>`,
		"fallback": "streamline:watch-circle-menu",
	});
}

export default Component;
