import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifcugn6hd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifcugn6hd"/>`,
		"fallback": "carbon:tree-view",
	});
}

export default Component;
