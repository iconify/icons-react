import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woz_0rcvu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woz_0rcvu"/>`,
		"fallback": "fad:phase",
	});
}

export default Component;
