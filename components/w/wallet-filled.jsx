import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkqky1bmv.css';
import '../../css/c/cps_4vb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkqky1bmv"/><path class="cps_4vb0w"/>`,
		"fallback": "boxicons:wallet-filled",
	});
}

export default Component;
