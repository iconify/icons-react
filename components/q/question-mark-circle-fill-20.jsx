import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cysjv4btu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cysjv4btu"/>`,
		"fallback": "garden:question-mark-circle-fill-20",
	});
}

export default Component;
