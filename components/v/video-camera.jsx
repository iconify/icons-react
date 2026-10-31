import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n3yhrkbkk.css';
import '../../css/r/r7hkatu5a.css';
import '../../css/v/v0klmbc7w.css';
import '../../css/x/xcfu_1bpw.css';
import '../../css/e/e5leyacwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n3yhrkbkk wm-shadow"/><path class="r7hkatu5a"/><path class="v0klmbc7w"/><path class="xcfu_1bpw"/><path class="e5leyacwk"/></g>`,
		"fallback": "withicons-retro:video-camera",
	});
}

export default Component;
