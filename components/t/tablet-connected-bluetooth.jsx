import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/omv99sb0f.css';
import '../../css/q/qxcdtgl1w.css';
import '../../css/w/wttawfb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="omv99sb0f"/><path class="qxcdtgl1w"/><path class="wttawfb0l"/></g>`,
		"fallback": "hugeicons:tablet-connected-bluetooth",
	});
}

export default Component;
