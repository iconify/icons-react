import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qykhkv9au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qykhkv9au"/>`,
		"fallback": "mdi:source-commit-end-local",
	});
}

export default Component;
