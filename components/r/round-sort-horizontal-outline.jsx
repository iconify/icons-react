import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sbgj8s2qu.css';
import '../../css/w/wy60p-_qw.css';
import '../../css/v/v1p2_4oxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sbgj8s2qu"/><path class="wy60p-_qw"/><path class="v1p2_4oxh"/></g>`,
		"fallback": "solar:round-sort-horizontal-outline",
	});
}

export default Component;
