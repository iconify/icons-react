import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6hxv1kmr.css';
import '../../css/m/mmasx843w.css';
import '../../css/d/d1xy-t7vc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6hxv1kmr"/><path class="mmasx843w"/><path class="d1xy-t7vc"/>`,
		"fallback": "energy-icons:loan-20-bold",
	});
}

export default Component;
