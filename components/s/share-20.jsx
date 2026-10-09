import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlqc2v4ju.css';
import '../../css/e/e9f0v0bru.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlqc2v4ju"/><path class="e9f0v0bru"/>`,
		"fallback": "energy-icons:share-20",
	});
}

export default Component;
