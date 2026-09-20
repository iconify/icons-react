import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qpgyrzr1h.css';
import '../../css/t/tf04fkg3y.css';
import '../../css/g/g-dck3t8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qpgyrzr1h"/><path class="tf04fkg3y"/><path class="g-dck3t8r"/></g>`,
		"fallback": "solar:music-note-4-line-duotone",
	});
}

export default Component;
