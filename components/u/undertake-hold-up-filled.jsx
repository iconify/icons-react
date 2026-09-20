import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sde3gc6on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sde3gc6on"/>`,
		"fallback": "tdesign:undertake-hold-up-filled",
	});
}

export default Component;
