import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd6gj6bbb.css';
import '../../css/g/gdq0r_bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd6gj6bbb"/><path class="gdq0r_bis"/>`,
		"fallback": "boxicons:search-big-plus",
	});
}

export default Component;
