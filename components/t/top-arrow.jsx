import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbgiu0boz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbgiu0boz"/>`,
		"fallback": "fluent-emoji-high-contrast:top-arrow",
	});
}

export default Component;
