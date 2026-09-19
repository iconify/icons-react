import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iasx04kql.css';
import '../../css/g/g2wzoo_hf.css';
import '../../css/n/nbgr6-bnn.css';
import '../../css/w/wklmo9b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iasx04kql"/><path class="g2wzoo_hf"/><path class="nbgr6-bnn"/><path class="wklmo9b4a"/></g>`,
		"fallback": "covid:quarantine-place-time-date-day",
	});
}

export default Component;
