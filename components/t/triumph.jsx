import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlbmq7jjy.css';
import '../../css/a/av19bdz1n.css';
import '../../css/l/liko5dbgp.css';
import '../../css/d/d-s2jmb8u.css';
import '../../css/c/cpilzyf6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlbmq7jjy"/><path class="av19bdz1n"/><path class="liko5dbgp"/><path class="d-s2jmb8u"/><path class="cpilzyf6t"/>`,
		"fallback": "fxemoji:triumph",
	});
}

export default Component;
