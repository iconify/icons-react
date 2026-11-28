import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irl3n7ied.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irl3n7ied"/>`,
		"fallback": "iconaut:toothbrush-solid",
	});
}

export default Component;
