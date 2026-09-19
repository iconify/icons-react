import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtylgdcmj.css';
import '../../css/w/wod7bgbrc.css';
import '../../css/t/tnokj8bkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtylgdcmj"><path class="wod7bgbrc"/><path class="tnokj8bkj"/></g>`,
		"fallback": "ion:md-time",
	});
}

export default Component;
