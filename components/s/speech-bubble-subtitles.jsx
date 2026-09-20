import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjtj21b7t.css';
import '../../css/z/zunpkrbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cjtj21b7t"/><path clip-rule="evenodd" class="zunpkrbju"/></g>`,
		"fallback": "nrk:speech-bubble-subtitles",
	});
}

export default Component;
