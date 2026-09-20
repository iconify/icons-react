import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfe806brr.css';
import '../../css/c/cngewyg-g.css';
import '../../css/e/ezlrtwd4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfe806brr"/><path class="cngewyg-g"/><path class="ezlrtwd4b"/>`,
		"fallback": "selfhst:mediamanager",
	});
}

export default Component;
