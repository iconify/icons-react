import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t2w0vbc1f.css';
import '../../css/v/v9qwxk7pw.css';
import '../../css/v/vx3y4mp6c.css';
import '../../css/p/py-u8epwi.css';
import '../../css/j/j7m6u-b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t2w0vbc1f"/><path class="v9qwxk7pw wm-k"/><path class="vx3y4mp6c wm-k"/><path class="py-u8epwi wm-a"/><path class="j7m6u-b-q wm-a"/></g>`,
		"fallback": "withicons:panel-left-close-sketch",
	});
}

export default Component;
