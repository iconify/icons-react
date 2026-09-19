import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/x/x918m1bzc.css';
import '../../css/p/phy6vld8i.css';
import '../../css/v/vh0b1fbdl.css';
import '../../css/i/i-iwghbzm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="x918m1bzc"/><path class="phy6vld8i"/><path class="vh0b1fbdl"/><path class="i-iwghbzm"/></g>`,
		"fallback": "fluent-emoji-flat:smiling-face-with-sunglasses",
	});
}

export default Component;
