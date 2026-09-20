import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpl0q1bzo.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpl0q1bzo"/>`,
		"fallback": "lineicons:volume-off",
	});
}

export default Component;
