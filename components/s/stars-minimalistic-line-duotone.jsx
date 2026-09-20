import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/njfq1c6iw.css';
import '../../css/v/vkmh5nbgy.css';
import '../../css/o/obrh7md7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="njfq1c6iw"/><path class="vkmh5nbgy"/><path class="obrh7md7u"/></g>`,
		"fallback": "solar:stars-minimalistic-line-duotone",
	});
}

export default Component;
