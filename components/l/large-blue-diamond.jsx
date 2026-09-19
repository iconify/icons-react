import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tni516bzj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tni516bzj"/>`,
		"fallback": "fluent-emoji-high-contrast:large-blue-diamond",
	});
}

export default Component;
