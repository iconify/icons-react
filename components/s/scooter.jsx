import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul832ibzb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul832ibzb"/>`,
		"fallback": "lineicons:scooter",
	});
}

export default Component;
