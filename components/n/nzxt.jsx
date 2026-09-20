import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irhaz3qoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irhaz3qoz"/>`,
		"fallback": "thesvg-color:nzxt",
	});
}

export default Component;
