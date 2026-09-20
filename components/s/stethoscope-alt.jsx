import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h96oc06ai.css';
import '../../css/s/srkn7eb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h96oc06ai"/><path class="srkn7eb3y"/>`,
		"fallback": "uim:stethoscope-alt",
	});
}

export default Component;
