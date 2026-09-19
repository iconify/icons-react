import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cebocs6cz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cebocs6cz"/>`,
		"fallback": "fluent-emoji-high-contrast:see-no-evil-monkey",
	});
}

export default Component;
