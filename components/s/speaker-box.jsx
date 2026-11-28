import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/thjkpabpk.css';
import '../../css/e/e5wrxmbgb.css';
import '../../css/g/ghjgxjbgi.css';
import '../../css/q/qm72ocbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="thjkpabpk"/><path class="e5wrxmbgb"/><path class="ghjgxjbgi"/><path class="qm72ocbza"/></g>`,
		"fallback": "iconaut:speaker-box",
	});
}

export default Component;
