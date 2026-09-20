import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je_q_ibix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je_q_ibix"/>`,
		"fallback": "uiw:shrink",
	});
}

export default Component;
