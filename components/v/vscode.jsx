import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b78pnzbnl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b78pnzbnl"/>`,
		"fallback": "codicon:vscode",
	});
}

export default Component;
