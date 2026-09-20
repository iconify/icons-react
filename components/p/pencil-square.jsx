import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o8-5w4b_i.css';
import '../../css/k/kfl-snbpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o8-5w4b_i"/><path class="kfl-snbpg"/></g>`,
		"fallback": "streamline-flex:pencil-square",
	});
}

export default Component;
