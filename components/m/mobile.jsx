import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axdu2ub5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axdu2ub5l"/>`,
		"fallback": "ci:mobile",
	});
}

export default Component;
