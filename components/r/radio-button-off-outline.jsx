import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty-eptbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty-eptbmk"/>`,
		"fallback": "eva:radio-button-off-outline",
	});
}

export default Component;
