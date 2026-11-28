import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc7fnr-0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc7fnr-0g"/>`,
		"fallback": "noviair:podcast-plus",
	});
}

export default Component;
