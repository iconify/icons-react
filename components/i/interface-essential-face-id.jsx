import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_a9xgb5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_a9xgb5s"/>`,
		"fallback": "streamline-pixel:interface-essential-face-id",
	});
}

export default Component;
