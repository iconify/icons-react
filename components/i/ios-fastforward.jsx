import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj_7ijbtl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj_7ijbtl"/>`,
		"fallback": "ion:ios-fastforward",
	});
}

export default Component;
