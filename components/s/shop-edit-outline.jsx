import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-n5hnboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-n5hnboj"/>`,
		"fallback": "mdi:shop-edit-outline",
	});
}

export default Component;
