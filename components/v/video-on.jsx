import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keijgb3kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keijgb3kq"/>`,
		"fallback": "circum:video-on",
	});
}

export default Component;
