import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bsei3dbqt.css';
import '../../css/s/sczjsxfuk.css';
import '../../css/k/ky1d6yzjf.css';
import '../../css/i/itnabdtio.css';
import '../../css/t/tq-3jub4d.css';
import '../../css/p/pos0v0bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bsei3dbqt wm-shadow"/><path class="sczjsxfuk"/><path class="ky1d6yzjf"/><path class="itnabdtio"/><path class="tq-3jub4d"/><path class="pos0v0bhk"/></g>`,
		"fallback": "withicons-retro:server",
	});
}

export default Component;
