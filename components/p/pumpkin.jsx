import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtq102boa.css';
import '../../css/f/flnanvbob.css';
import '../../css/h/hte--4ehz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dtq102boa"/><path class="flnanvbob"/><path class="hte--4ehz"/></g>`,
		"fallback": "andrsrxn:pumpkin",
	});
}

export default Component;
