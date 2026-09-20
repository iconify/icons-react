import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/osryi6b4i.css';
import '../../css/n/nua3hhbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="osryi6b4i"/><path class="nua3hhbht"/></g>`,
		"fallback": "majesticons:ticket-check-line",
	});
}

export default Component;
