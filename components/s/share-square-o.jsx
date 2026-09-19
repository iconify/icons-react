import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9wjtwlcb.css';

const viewBox = {"width":1664,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9wjtwlcb"/>`,
		"fallback": "fa:share-square-o",
	});
}

export default Component;
