import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7pmrub2v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7pmrub2v"/>`,
		"fallback": "codicon:voice-mode-download",
	});
}

export default Component;
