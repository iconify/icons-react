import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sns089f0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sns089f0j"/>`,
		"fallback": "hugeicons:waves",
	});
}

export default Component;
