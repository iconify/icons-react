import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ojh9awbdp.css';
import '../../css/t/t3q1ykbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="plus-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ojh9awbdp"/><path class="t3q1ykbbo"/></g></g>`,
		"fallback": "cuida:plus-outline",
	});
}

export default Component;
