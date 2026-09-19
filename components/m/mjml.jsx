import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7d5vnbqn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7d5vnbqn"/>`,
		"fallback": "catppuccin:mjml",
	});
}

export default Component;
