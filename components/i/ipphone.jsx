import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsu4ecc4m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsu4ecc4m"/>`,
		"fallback": "picon:ipphone",
	});
}

export default Component;
