import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hane4bbus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hane4bbus"/>`,
		"fallback": "ion:ios-pin",
	});
}

export default Component;
