import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn2ejlbtm.css';
import '../../css/e/eu7gmyhby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn2ejlbtm secondary"/><path class="eu7gmyhby primary"/>`,
		"fallback": "iconaut:mountain-duo",
	});
}

export default Component;
