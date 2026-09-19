import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqyua9-ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqyua9-ok"/>`,
		"fallback": "bitcoin-icons:question-outline",
	});
}

export default Component;
