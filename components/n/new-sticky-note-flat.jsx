import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkfc89v-p.css';
import '../../css/l/lzt8_jluk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xkfc89v-p"/><path class="lzt8_jluk"/></g>`,
		"fallback": "streamline-color:new-sticky-note-flat",
	});
}

export default Component;
