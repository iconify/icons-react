import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqfm60b_p.css';
import '../../css/h/hrtye35bf.css';
import '../../css/o/oa2ilrthy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqfm60b_p"/><path class="hrtye35bf"/><path class="oa2ilrthy"/>`,
		"fallback": "fxemoji:taurus",
	});
}

export default Component;
