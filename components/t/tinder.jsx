import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh-8-v7nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gh-8-v7nv"/>`,
		"fallback": "hugeicons:tinder",
	});
}

export default Component;
