import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcnawdb5g.css';
import '../../css/g/gvynxsbvn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcnawdb5g"/><path class="gvynxsbvn"/>`,
		"fallback": "carbon:region-analysis-volume",
	});
}

export default Component;
