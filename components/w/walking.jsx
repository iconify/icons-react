import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wasx27b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wasx27b7b"/>`,
		"fallback": "streamline-ultimate-color:walking",
	});
}

export default Component;
