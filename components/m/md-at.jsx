import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkglbdcce.css';
import '../../css/t/ts0tfxa1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkglbdcce"/><path class="ts0tfxa1w"/>`,
		"fallback": "ion:md-at",
	});
}

export default Component;
