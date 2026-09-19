import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftiuf-5wm.css';
import '../../css/h/h2k8cfbxb.css';
import '../../css/h/hh18pwssq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftiuf-5wm"/><circle class="h2k8cfbxb"/><path class="hh18pwssq"/>`,
		"fallback": "eos-icons:pod-autoscaler-outlined",
	});
}

export default Component;
