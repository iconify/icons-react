import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m51zj83kr.css';
import '../../css/a/at-kqgdlc.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m51zj83kr wm-k"/><path class="at-kqgdlc wm-a"/><path class="wm-deco wnveq1bjc"/></g>`,
		"fallback": "withicons-kawaii:strikethrough",
	});
}

export default Component;
