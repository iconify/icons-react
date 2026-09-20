import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj9p6zbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj9p6zbmb"/>`,
		"fallback": "ri:leaf-line",
	});
}

export default Component;
