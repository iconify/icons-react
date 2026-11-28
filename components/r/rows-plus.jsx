import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn1a4jxpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn1a4jxpg"/>`,
		"fallback": "noviair:rows-plus",
	});
}

export default Component;
