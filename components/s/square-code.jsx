import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/j/j4e6xnbta.css';
import '../../css/j/j7qb7iods.css';
import '../../css/o/oodk36b3h.css';
import '../../css/i/is550bbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="j4e6xnbta"/><path class="j7qb7iods"/><path class="oodk36b3h wm-shine"/><path class="is550bbtp wm-deco"/></g>`,
		"fallback": "withicons-sticker:square-code",
	});
}

export default Component;
