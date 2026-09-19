import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6h4kbwi.css';
import '../../css/c/ctvx1x6ua.css';
import '../../css/q/qrplm35by.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz6h4kbwi"/><path class="ctvx1x6ua"/><path class="qrplm35by"/>`,
		"fallback": "ion:ios-beer",
	});
}

export default Component;
