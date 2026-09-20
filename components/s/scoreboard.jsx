import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tvg0bybmh.css';
import '../../css/y/yk-re2bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tvg0bybmh"/><path class="yk-re2bmr"/></g>`,
		"fallback": "tabler:scoreboard",
	});
}

export default Component;
