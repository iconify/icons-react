import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvw1sgbmg.css';
import '../../css/t/t6g099cob.css';
import '../../css/c/calastbeo.css';
import '../../css/o/oinz63b_i.css';
import '../../css/o/onxwq4bzx.css';
import '../../css/g/g2e755bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cvw1sgbmg wm-shadow"/><path class="t6g099cob"/><path class="calastbeo"/><path class="oinz63b_i"/><path class="onxwq4bzx"/><path class="g2e755bto"/></g>`,
		"fallback": "withicons-retro:switch-camera",
	});
}

export default Component;
