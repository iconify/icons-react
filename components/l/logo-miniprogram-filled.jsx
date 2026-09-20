import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa_fyp89y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa_fyp89y"/>`,
		"fallback": "tdesign:logo-miniprogram-filled",
	});
}

export default Component;
