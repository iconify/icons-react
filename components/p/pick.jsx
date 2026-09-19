import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osfx-_bym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osfx-_bym"/>`,
		"fallback": "fluent-emoji-high-contrast:pick",
	});
}

export default Component;
