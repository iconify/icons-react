import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwi7mvckn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwi7mvckn"/>`,
		"fallback": "lsicon:overtime-outline",
	});
}

export default Component;
