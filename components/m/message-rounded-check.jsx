import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvxpmlmwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvxpmlmwr"/>`,
		"fallback": "bxs:message-rounded-check",
	});
}

export default Component;
