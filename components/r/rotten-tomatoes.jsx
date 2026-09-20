import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0rp2hbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0rp2hbfh"/>`,
		"fallback": "thesvg-color:rotten-tomatoes",
	});
}

export default Component;
