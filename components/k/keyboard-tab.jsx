import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpo_93sap.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpo_93sap"/>`,
		"fallback": "codicon:keyboard-tab",
	});
}

export default Component;
