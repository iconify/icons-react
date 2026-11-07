import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q4quubbkz.css';
import '../../css/e/eupf27bpo.css';
import '../../css/i/iredkutyw.css';
import '../../css/g/g9fm93boy.css';
import '../../css/p/psheptbge.css';
import '../../css/p/p486gvbkz.css';
import '../../css/j/jj8gmw3jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q4quubbkz"/><path class="eupf27bpo"/><path class="iredkutyw"/><path class="g9fm93boy"/><path class="psheptbge"/><path class="p486gvbkz"/><path class="jj8gmw3jw"/></g>`,
		"fallback": "solar:suspension-bolt-broken",
	});
}

export default Component;
