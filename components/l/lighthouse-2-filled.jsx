import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf4f4fryy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf4f4fryy"/>`,
		"fallback": "tdesign:lighthouse-2-filled",
	});
}

export default Component;
