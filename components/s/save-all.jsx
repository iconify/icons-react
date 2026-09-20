import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iygqaxbee.css';
import '../../css/t/t3w8yqyck.css';
import '../../css/m/ms_pyhbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iygqaxbee"/><path class="t3w8yqyck"/><path class="ms_pyhbht"/></g>`,
		"fallback": "lucide:save-all",
	});
}

export default Component;
