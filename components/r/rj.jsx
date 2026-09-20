import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-m-2byg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-m-2byg"/>`,
		"fallback": "picon:rj",
	});
}

export default Component;
