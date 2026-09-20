import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4oj3_btn.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4oj3_btn"/>`,
		"fallback": "wi:stars",
	});
}

export default Component;
