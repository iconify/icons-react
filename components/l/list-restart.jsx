import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kytna9nvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kytna9nvp"/>`,
		"fallback": "hugeicons:list-restart",
	});
}

export default Component;
