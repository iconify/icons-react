import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wq2q99b3h.css';
import '../../css/i/ise5_fzgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="wq2q99b3h"/><path class="ise5_fzgd"/></g>`,
		"fallback": "cryptocurrency-color:sbd",
	});
}

export default Component;
