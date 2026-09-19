import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqfm60b_p.css';
import '../../css/h/hrtye35bf.css';
import '../../css/z/zc0_kyace.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqfm60b_p"/><path class="hrtye35bf"/><path class="zc0_kyace"/>`,
		"fallback": "fxemoji:libra",
	});
}

export default Component;
