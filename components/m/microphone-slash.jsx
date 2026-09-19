import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic523acqq.css';
import '../../css/v/vr012vb-l.css';
import '../../css/x/xklaxdbny.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ic523acqq"/><path class="vr012vb-l"/><path class="xklaxdbny"/></g>`,
		"fallback": "glyphs-poly:microphone-slash",
	});
}

export default Component;
