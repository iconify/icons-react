import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nupt5ccee.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nupt5ccee"/>`,
		"fallback": "fluent-emoji-high-contrast:toilet",
	});
}

export default Component;
