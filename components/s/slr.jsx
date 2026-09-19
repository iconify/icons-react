import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/byjycd_sr.css';
import '../../css/t/tbv80mx-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="byjycd_sr"/><path class="tbv80mx-u"/></g>`,
		"fallback": "cryptocurrency-color:slr",
	});
}

export default Component;
