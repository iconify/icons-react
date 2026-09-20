import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxse9ubls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxse9ubls"/>`,
		"fallback": "octicon:moon-24",
	});
}

export default Component;
