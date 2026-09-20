import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1i-fu7vn.css';
import '../../css/y/y5w19acgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1i-fu7vn"/><path class="y5w19acgb"/>`,
		"fallback": "oui:token-completion-suggester",
	});
}

export default Component;
