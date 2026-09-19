import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2lktqd8u.css';
import '../../css/e/ejs_3u14j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2lktqd8u"/><path class="ejs_3u14j"/>`,
		"fallback": "ion:md-chatboxes",
	});
}

export default Component;
