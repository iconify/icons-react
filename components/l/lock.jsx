import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8x9iqblc.css';
import '../../css/p/plqc46bvd.css';
import '../../css/d/dvj1g-bqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8x9iqblc"/><path class="plqc46bvd"/><path class="dvj1g-bqd"/>`,
		"fallback": "fxemoji:lock",
	});
}

export default Component;
