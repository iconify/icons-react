import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/samvw5boj.css';
import '../../css/e/epl0f9bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="samvw5boj"/><path clip-rule="evenodd" class="epl0f9bta"/>`,
		"fallback": "solar:list-heart-bold",
	});
}

export default Component;
