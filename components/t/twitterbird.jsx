import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wngk6ibgl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wngk6ibgl"/>`,
		"fallback": "raphael:twitterbird",
	});
}

export default Component;
