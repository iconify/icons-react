import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/errsw2beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="errsw2beg"/>`,
		"fallback": "octicon:screen-normal-24",
	});
}

export default Component;
