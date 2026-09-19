import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkm56n7je.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jkm56n7je"/>`,
		"fallback": "codicon:layout-centered",
	});
}

export default Component;
