import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5qc9eivb.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5qc9eivb"/>`,
		"fallback": "fa:transgender-alt",
	});
}

export default Component;
