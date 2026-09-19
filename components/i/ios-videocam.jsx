import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drmjsqkyz.css';
import '../../css/r/rab5k-b0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drmjsqkyz"/><path class="rab5k-b0b"/>`,
		"fallback": "ion:ios-videocam",
	});
}

export default Component;
