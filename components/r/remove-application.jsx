import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vthoncfqk.css';
import '../../css/m/mlv6tlbcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vthoncfqk"/><path class="mlv6tlbcz"/></g>`,
		"fallback": "ix:remove-application",
	});
}

export default Component;
