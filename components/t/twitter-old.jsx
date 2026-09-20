import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wix3a056v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wix3a056v"/>`,
		"fallback": "lineicons:twitter-old",
	});
}

export default Component;
