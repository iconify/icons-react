import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c-mhhm1pp.css';
import '../../css/f/fwyfrqagk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c-mhhm1pp"/><path class="fwyfrqagk"/></g>`,
		"fallback": "streamline-flex:ios-ipados",
	});
}

export default Component;
