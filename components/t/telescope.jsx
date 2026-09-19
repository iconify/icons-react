import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf4x2lbjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf4x2lbjf"/>`,
		"fallback": "fluent-emoji-high-contrast:telescope",
	});
}

export default Component;
