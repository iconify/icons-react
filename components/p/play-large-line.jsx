import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prb1s5poo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prb1s5poo"/>`,
		"fallback": "ri:play-large-line",
	});
}

export default Component;
