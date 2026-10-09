import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofts-6g4o.css';
import '../../css/n/nlascy4eu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofts-6g4o"/><path class="nlascy4eu"/>`,
		"fallback": "energy-icons:terminal-square-20",
	});
}

export default Component;
