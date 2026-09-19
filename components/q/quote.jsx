import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1kq8d5mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1kq8d5mo"/>`,
		"fallback": "codex:quote",
	});
}

export default Component;
