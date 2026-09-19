import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-v7-ebrl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-v7-ebrl"/>`,
		"fallback": "bi:play-btn-fill",
	});
}

export default Component;
