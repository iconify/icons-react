import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftiuf-5wm.css';
import '../../css/h/h2k8cfbxb.css';
import '../../css/j/j_4d_0bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftiuf-5wm"/><circle class="h2k8cfbxb"/><path class="j_4d_0bxt"/>`,
		"fallback": "eos-icons:pod-outlined",
	});
}

export default Component;
