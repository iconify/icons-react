import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwdtkeyee.css';
import '../../css/v/v03y4pbnf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwdtkeyee"/><path class="v03y4pbnf"/></g>`,
		"fallback": "glyphs:toolbox-duo",
	});
}

export default Component;
