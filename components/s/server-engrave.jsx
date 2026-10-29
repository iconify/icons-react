import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spuqbqsgy.css';
import '../../css/e/e3iia6wxp.css';
import '../../css/g/g8ehjj7yy.css';
import '../../css/k/ksdsltdkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="spuqbqsgy wm-k"/><path class="e3iia6wxp wm-shadow"/><path class="g8ehjj7yy wm-k"/><path class="ksdsltdkn wm-a"/></g>`,
		"fallback": "withicons:server-engrave",
	});
}

export default Component;
