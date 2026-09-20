import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujkfyy2pr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujkfyy2pr"/>`,
		"fallback": "oui:token-alias",
	});
}

export default Component;
