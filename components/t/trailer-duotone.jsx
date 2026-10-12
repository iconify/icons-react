import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjldjdyqs.css';
import '../../css/o/o5jtyekak.css';
import '../../css/b/blwm_i0-s.css';
import '../../css/d/dlz_dxnme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sjldjdyqs"/><path class="o5jtyekak"/><path class="blwm_i0-s"/><path class="dlz_dxnme"/></g>`,
		"fallback": "lucide-extended:trailer-duotone",
	});
}

export default Component;
