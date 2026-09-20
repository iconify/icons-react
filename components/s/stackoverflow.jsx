import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvx_zmbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvx_zmbcb"/>`,
		"fallback": "simple-icons:stackoverflow",
	});
}

export default Component;
