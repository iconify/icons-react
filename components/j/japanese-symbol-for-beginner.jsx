import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtpj9ebze.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtpj9ebze"/>`,
		"fallback": "fluent-emoji-high-contrast:japanese-symbol-for-beginner",
	});
}

export default Component;
