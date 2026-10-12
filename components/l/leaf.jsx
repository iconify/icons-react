import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlklpib-i.css';
import '../../css/q/qwa3owbzy.css';
import '../../css/y/y9zeih8gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xlklpib-i"/><path class="qwa3owbzy"/><path class="y9zeih8gt"/></g>`,
		"fallback": "andrsrxn:leaf",
	});
}

export default Component;
