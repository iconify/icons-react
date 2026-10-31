import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sffv9vbmj.css';
import '../../css/r/rij3u7teq.css';
import '../../css/m/mjk-60smy.css';
import '../../css/o/o0kpffbbe.css';
import '../../css/m/mta4s4b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sffv9vbmj wm-shadow"/><path class="rij3u7teq wm-shadow"/><path class="mjk-60smy"/><path class="o0kpffbbe"/><path class="mta4s4b4w"/></g>`,
		"fallback": "withicons-brutal:toran",
	});
}

export default Component;
