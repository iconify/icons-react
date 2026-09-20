import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgkr2cb1y.css';
import '../../css/l/lpk4cubbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgkr2cb1y"/><path class="lpk4cubbm"/></g>`,
		"fallback": "tabler:meteor",
	});
}

export default Component;
