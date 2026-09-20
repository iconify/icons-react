import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv33hva9y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yv33hva9y"/>`,
		"fallback": "pajamas:pencil-square",
	});
}

export default Component;
