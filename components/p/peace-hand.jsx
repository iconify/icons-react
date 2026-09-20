import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iyert9z2q.css';
import '../../css/c/cpy738bbq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iyert9z2q"/><path class="cpy738bbq"/></g>`,
		"fallback": "streamline:peace-hand",
	});
}

export default Component;
