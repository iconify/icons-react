import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luy7zjvha.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luy7zjvha"/>`,
		"fallback": "fluent-emoji-high-contrast:ok-hand",
	});
}

export default Component;
