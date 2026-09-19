import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kowlw5zhx.css';
import '../../css/q/qn0v38bkw.css';
import '../../css/d/depnz-brc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kowlw5zhx"/><path clip-rule="evenodd" class="qn0v38bkw"/><path class="depnz-brc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-genie",
	});
}

export default Component;
