import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8y9mcbqf.css';
import '../../css/q/q1dm4ebyz.css';
import '../../css/w/w5gsaiq2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8y9mcbqf"/><path clip-rule="evenodd" class="q1dm4ebyz"/><path class="w5gsaiq2j"/></g>`,
		"fallback": "streamline-plump-color:notepad-text-flat",
	});
}

export default Component;
