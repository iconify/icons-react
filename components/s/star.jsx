import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvk9hvouj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvk9hvouj"/>`,
		"fallback": "heroicons:star",
	});
}

export default Component;
