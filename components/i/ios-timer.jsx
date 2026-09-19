import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opnuv-atr.css';
import '../../css/q/qirndk33c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opnuv-atr"/><path class="qirndk33c"/>`,
		"fallback": "ion:ios-timer",
	});
}

export default Component;
