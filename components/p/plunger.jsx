import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqkr2pbyp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqkr2pbyp"/>`,
		"fallback": "picon:plunger",
	});
}

export default Component;
