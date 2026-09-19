import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e2v_2f0hq.css';
import '../../css/q/qiq5x8bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e2v_2f0hq"/><path class="qiq5x8bmu"/></g>`,
		"fallback": "heroicons:phone-arrow-up-right-solid",
	});
}

export default Component;
