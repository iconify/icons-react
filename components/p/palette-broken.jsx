import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qi30vz44o.css';
import '../../css/e/ehgxs22fz.css';
import '../../css/h/hq7o26lao.css';
import '../../css/o/o1x490v7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qi30vz44o"/><path class="ehgxs22fz"/><path class="hq7o26lao"/><path class="o1x490v7y"/></g>`,
		"fallback": "solar:palette-broken",
	});
}

export default Component;
