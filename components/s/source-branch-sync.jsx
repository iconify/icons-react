import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzb3qybbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzb3qybbi"/>`,
		"fallback": "mdi:source-branch-sync",
	});
}

export default Component;
