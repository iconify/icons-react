import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt8pb18eq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt8pb18eq"/>`,
		"fallback": "codicon:vscode-insiders",
	});
}

export default Component;
