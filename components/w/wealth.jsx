import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f18ae7bbf.css';
import '../../css/k/kbju4ccat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f18ae7bbf"/><path class="kbju4ccat"/></g>`,
		"fallback": "tdesign:wealth",
	});
}

export default Component;
