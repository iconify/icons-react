import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzsd4cbnd.css';
import '../../css/r/r61ck_7vl.css';
import '../../css/d/d9sh3ra4x.css';
import '../../css/c/c45pyibuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzsd4cbnd"/><path class="r61ck_7vl"/><path class="d9sh3ra4x"/><path class="c45pyibuz"/></g>`,
		"fallback": "tdesign:video-camera-2",
	});
}

export default Component;
