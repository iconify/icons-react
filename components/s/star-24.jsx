import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u346-pjvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u346-pjvt"/>`,
		"fallback": "octicon:star-24",
	});
}

export default Component;
