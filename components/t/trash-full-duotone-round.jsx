import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3tl34osu.css';
import '../../css/a/aurq8ebdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3tl34osu"/><path class="aurq8ebdj"/></g>`,
		"fallback": "coolicons:trash-full-duotone-round",
	});
}

export default Component;
