import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue4v1ubkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue4v1ubkz"/>`,
		"fallback": "humbleicons:lock",
	});
}

export default Component;
