import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv9r2rbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv9r2rbsd"/>`,
		"fallback": "withicons:palm-tree-gloss",
	});
}

export default Component;
