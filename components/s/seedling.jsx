import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfd4xlzix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfd4xlzix"/>`,
		"fallback": "fluent-emoji-high-contrast:seedling",
	});
}

export default Component;
