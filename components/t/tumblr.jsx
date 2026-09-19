import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_den3eds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_den3eds"/>`,
		"fallback": "hugeicons:tumblr",
	});
}

export default Component;
