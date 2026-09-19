import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlnn0ibiz.css';
import '../../css/e/e_rm4btzd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlnn0ibiz"/><path class="e_rm4btzd"/>`,
		"fallback": "ep:map-location",
	});
}

export default Component;
