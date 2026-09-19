import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqh3ybnie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqh3ybnie"/>`,
		"fallback": "guidance:playground",
	});
}

export default Component;
