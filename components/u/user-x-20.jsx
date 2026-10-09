import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4gjp9e0a.css';
import '../../css/x/xho5iubuz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4gjp9e0a"/><path class="xho5iubuz"/>`,
		"fallback": "energy-icons:user-x-20",
	});
}

export default Component;
