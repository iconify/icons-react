import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ihd2b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ihd2b_b"/>`,
		"fallback": "tdesign:sandwich-filled",
	});
}

export default Component;
