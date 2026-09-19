import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nybxtij0l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nybxtij0l"/>`,
		"fallback": "bi:question-square-fill",
	});
}

export default Component;
