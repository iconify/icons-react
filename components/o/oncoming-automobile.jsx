import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey6g4lbvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey6g4lbvl"/>`,
		"fallback": "fluent-emoji-high-contrast:oncoming-automobile",
	});
}

export default Component;
