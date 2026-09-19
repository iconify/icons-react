import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f1wfu4_qk.css';
import '../../css/y/y2m5b7byp.css';
import '../../css/k/krjghjbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="f1wfu4_qk"/><rect class="y2m5b7byp"/><path class="krjghjbfy"/></g>`,
		"fallback": "bitcoin-icons:milk-outline",
	});
}

export default Component;
