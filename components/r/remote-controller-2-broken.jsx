import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sio6vka1s.css';
import '../../css/i/iqy4f3ajf.css';
import '../../css/y/y26jmob4o.css';
import '../../css/d/d9-3mgywf.css';
import '../../css/y/yn0ky0bzp.css';
import '../../css/p/p46370bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sio6vka1s"/><path class="iqy4f3ajf"/><path class="y26jmob4o"/><path class="d9-3mgywf"/><path class="yn0ky0bzp"/><path class="p46370bes"/></g>`,
		"fallback": "solar:remote-controller-2-broken",
	});
}

export default Component;
