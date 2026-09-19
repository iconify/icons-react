import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p7qo25lsm.css';
import '../../css/d/dggtwlu_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p7qo25lsm"/><path class="dggtwlu_p"/></g>`,
		"fallback": "hugeicons:sun-cloud-angled-zap-01",
	});
}

export default Component;
