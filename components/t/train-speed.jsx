import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2553ksfy.css';
import '../../css/t/ty-o2h1jw.css';
import '../../css/i/iwlmxtfbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z2553ksfy"/><path class="ty-o2h1jw"/><path class="iwlmxtfbk"/></g>`,
		"fallback": "andrsrxn:train-speed",
	});
}

export default Component;
