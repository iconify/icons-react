import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2n33z6pt.css';
import '../../css/d/dr_uzfb-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2n33z6pt"/><path class="dr_uzfb-x"/>`,
		"fallback": "selfhst:plmail-light",
	});
}

export default Component;
