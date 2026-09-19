import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvxufqi_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvxufqi_z"/>`,
		"fallback": "fluent-emoji-high-contrast:sunrise-over-mountains",
	});
}

export default Component;
