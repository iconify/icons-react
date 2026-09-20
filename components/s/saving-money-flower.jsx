import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3eau-cdt.css';
import '../../css/g/gvq-5ifuu.css';
import '../../css/c/cykaa7b7n.css';
import '../../css/x/x2ffd7b0q.css';
import '../../css/z/z-f7qjbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v3eau-cdt"/><path class="gvq-5ifuu"/><path class="cykaa7b7n"/><path class="x2ffd7b0q"/><path class="z-f7qjbqr"/></g>`,
		"fallback": "streamline-ultimate-color:saving-money-flower",
	});
}

export default Component;
