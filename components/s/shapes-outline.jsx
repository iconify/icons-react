import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm9wa7blu.css';
import '../../css/w/wjj7p8alk.css';
import '../../css/z/z5wdhwbks.css';
import '../../css/x/xp86pvbjs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jm9wa7blu"/><path class="wjj7p8alk"/><path clip-rule="evenodd" class="z5wdhwbks"/><path class="xp86pvbjs"/></g>`,
		"fallback": "glyphs:shapes-outline",
	});
}

export default Component;
