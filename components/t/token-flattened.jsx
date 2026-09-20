import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoko6whnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoko6whnc"/>`,
		"fallback": "oui:token-flattened",
	});
}

export default Component;
