import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nalrqgjfd.css';
import '../../css/s/so3k-qbsf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="nalrqgjfd"/><path class="so3k-qbsf"/></g>`,
		"fallback": "cryptocurrency-color:strat",
	});
}

export default Component;
