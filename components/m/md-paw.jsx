import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-9r5omfu.css';
import '../../css/v/vxwsbfy9u.css';
import '../../css/n/ngn3wxxwh.css';
import '../../css/z/zi89txbue.css';
import '../../css/l/l2sfx3bwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-9r5omfu"/><path class="vxwsbfy9u"/><path class="ngn3wxxwh"/><path class="zi89txbue"/><path class="l2sfx3bwm"/>`,
		"fallback": "ion:md-paw",
	});
}

export default Component;
