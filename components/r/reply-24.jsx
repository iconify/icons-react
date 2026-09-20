import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utr3r6_dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utr3r6_dl"/>`,
		"fallback": "octicon:reply-24",
	});
}

export default Component;
