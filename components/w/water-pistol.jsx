import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4b2hccvj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4b2hccvj"/>`,
		"fallback": "fluent-emoji-high-contrast:water-pistol",
	});
}

export default Component;
