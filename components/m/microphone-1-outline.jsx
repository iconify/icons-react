import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwp43mulz.css';
import '../../css/r/r6v_pabhc.css';
import '../../css/j/je6hsf0yt.css';
import '../../css/y/ywibotp-q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hwp43mulz"/><path class="r6v_pabhc"/><path clip-rule="evenodd" class="je6hsf0yt"/><path class="ywibotp-q"/></g>`,
		"fallback": "glyphs:microphone-1-outline",
	});
}

export default Component;
