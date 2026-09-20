import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsrxd0bsy.css';
import '../../css/d/d7pg5sbdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fsrxd0bsy"/><path class="d7pg5sbdd"/>`,
		"fallback": "qlementine-icons:match-whole-word-16",
	});
}

export default Component;
