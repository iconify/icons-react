import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yqtey0bii.css';
import '../../css/o/obyrvxbrs.css';
import '../../css/e/en_6zhbjs.css';
import '../../css/a/aod7xpoai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yqtey0bii"/><path class="obyrvxbrs wm-a"/><path class="en_6zhbjs wm-k"/><path class="aod7xpoai wm-a"/></g>`,
		"fallback": "withicons:square-terminal-sketch",
	});
}

export default Component;
