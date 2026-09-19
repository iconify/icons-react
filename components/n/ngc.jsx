import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ckbwsh2jd.css';
import '../../css/h/htcg-xorx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ckbwsh2jd"/><path class="htcg-xorx"/></g>`,
		"fallback": "cryptocurrency-color:ngc",
	});
}

export default Component;
