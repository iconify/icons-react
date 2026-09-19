import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaxvt8d_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaxvt8d_n"/>`,
		"fallback": "codicon:vscode-insiders-outline",
	});
}

export default Component;
