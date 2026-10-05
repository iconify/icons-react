import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/temlwib5e.css';
import '../../css/e/eyuir1ucw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="temlwib5e"/><path class="eyuir1ucw"/></g>`,
		"fallback": "matita:pause",
	});
}

export default Component;
