import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4d6rcc0y.css';
import '../../css/c/cctr5u8fb.css';
import '../../css/q/qbem65zxw.css';
import '../../css/p/pwdn0_bfh.css';
import '../../css/w/wlo-fzbut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4d6rcc0y"/><path class="cctr5u8fb"/><path class="qbem65zxw"/><path class="pwdn0_bfh"/><path class="wlo-fzbut"/>`,
		"fallback": "ion:ios-paw-outline",
	});
}

export default Component;
