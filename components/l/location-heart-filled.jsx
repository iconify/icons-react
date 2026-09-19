import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqhp6dbju.css';
import '../../css/p/pzbcwvb7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqhp6dbju"/><path class="pzbcwvb7c"/>`,
		"fallback": "carbon:location-heart-filled",
	});
}

export default Component;
