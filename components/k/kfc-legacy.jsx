import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa3ll2bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa3ll2bzh"/>`,
		"fallback": "thesvg:kfc-legacy",
	});
}

export default Component;
