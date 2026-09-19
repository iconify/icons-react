import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8z2t83mb.css';
import '../../css/o/onaqt0bbp.css';
import '../../css/l/l37k14u2h.css';
import '../../css/t/twpxdwbks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8z2t83mb"/><path class="onaqt0bbp"/><path class="l37k14u2h"/><path class="twpxdwbks"/>`,
		"fallback": "fxemoji:japaneseangrymask",
	});
}

export default Component;
