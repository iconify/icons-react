import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu9jgt3jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu9jgt3jb"/>`,
		"fallback": "vadivam:terminal",
	});
}

export default Component;
