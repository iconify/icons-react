import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq9_n9cuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq9_n9cuy"/>`,
		"fallback": "prime:star-fill",
	});
}

export default Component;
