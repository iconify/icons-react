import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vztivl34g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vztivl34g"/>`,
		"fallback": "streamline-ultimate:laundry-hand-wash-bold",
	});
}

export default Component;
