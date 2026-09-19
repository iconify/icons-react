import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyq7z9z1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyq7z9z1g"/>`,
		"fallback": "fluent-emoji-high-contrast:raised-back-of-hand",
	});
}

export default Component;
