import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y28_cgdgv.css';
import '../../css/d/d26v317vg.css';
import '../../css/l/l2qa26fpr.css';
import '../../css/l/leg57pb1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="y28_cgdgv"/><g class="d26v317vg"><path class="l2qa26fpr"/><path class="leg57pb1f"/></g></g>`,
		"fallback": "cryptocurrency-color:unity",
	});
}

export default Component;
