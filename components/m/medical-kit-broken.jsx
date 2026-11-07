import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ebr-_j5mg.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/k/k8us2bvxz.css';
import '../../css/u/ukvmc8bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ebr-_j5mg"/><path class="hq-5njbjh"/><path class="k8us2bvxz"/><circle class="ukvmc8bfw"/></g>`,
		"fallback": "solar:medical-kit-broken",
	});
}

export default Component;
