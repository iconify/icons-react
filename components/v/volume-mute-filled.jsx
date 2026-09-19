import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-hr_itmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-hr_itmh"/>`,
		"fallback": "boxicons:volume-mute-filled",
	});
}

export default Component;
