import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keum6jv7t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keum6jv7t"/>`,
		"fallback": "pepicons-pencil:minus",
	});
}

export default Component;
