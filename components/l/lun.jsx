import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig3pv1hce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig3pv1hce"/>`,
		"fallback": "cryptocurrency:lun",
	});
}

export default Component;
