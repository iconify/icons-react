import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igf1pvrth.css';
import '../../css/a/ahvv0kbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="igf1pvrth"/><path class="ahvv0kbdw"/></g>`,
		"fallback": "keyline-icons:layout-dashboard-two-tone",
	});
}

export default Component;
