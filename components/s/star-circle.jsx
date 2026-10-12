import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afenncfgc.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/j/jkp03ac7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="afenncfgc"/><circle transform="rotate(90 12 12)" class="mpf1g8bav"/><path class="jkp03ac7h"/></g>`,
		"fallback": "andrsrxn:star-circle",
	});
}

export default Component;
