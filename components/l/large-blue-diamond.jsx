import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytsullcxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytsullcxp"/>`,
		"fallback": "fluent-emoji-flat:large-blue-diamond",
	});
}

export default Component;
