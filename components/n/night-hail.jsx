import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx-46-p_q.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx-46-p_q"/>`,
		"fallback": "wi:night-hail",
	});
}

export default Component;
