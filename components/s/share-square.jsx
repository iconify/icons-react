import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-1w2wbkv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-1w2wbkv"/>`,
		"fallback": "fa7-solid:share-square",
	});
}

export default Component;
