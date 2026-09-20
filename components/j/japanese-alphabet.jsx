import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r9goysb_u.css';
import '../../css/l/ls0y62_4b.css';
import '../../css/d/d8asqki1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r9goysb_u"/><path class="ls0y62_4b"/><path class="d8asqki1b"/></g>`,
		"fallback": "streamline-flex:japanese-alphabet",
	});
}

export default Component;
