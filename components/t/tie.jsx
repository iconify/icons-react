import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4_lk-lvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4_lk-lvm"/>`,
		"fallback": "hugeicons:tie",
	});
}

export default Component;
