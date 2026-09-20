import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoazjybag.css';

const viewBox = {"width":220,"height":220};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoazjybag"/>`,
		"fallback": "thesvg-color:milanote-light",
	});
}

export default Component;
