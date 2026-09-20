import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f3vmiibqj.css';
import '../../css/z/zfkyfyb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f3vmiibqj"/><path class="zfkyfyb8d"/></g>`,
		"fallback": "reicon:microphone-slash-filled",
	});
}

export default Component;
