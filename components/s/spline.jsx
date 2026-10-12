import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x642spbbh.css';
import '../../css/v/v3yu9caws.css';
import '../../css/g/g6l6pvtuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x642spbbh"/><path class="v3yu9caws"/><path class="g6l6pvtuu"/></g>`,
		"fallback": "andrsrxn:spline",
	});
}

export default Component;
