import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqkgrobmp.css';
import '../../css/w/wh-3tcbhd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqkgrobmp"/><path class="wh-3tcbhd"/>`,
		"fallback": "selfhst:java",
	});
}

export default Component;
