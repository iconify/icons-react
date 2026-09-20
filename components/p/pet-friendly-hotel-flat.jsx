import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ekxadm1na.css';
import '../../css/u/u-w8u56pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ekxadm1na"/><path class="u-w8u56pf"/></g>`,
		"fallback": "streamline-sharp-color:pet-friendly-hotel-flat",
	});
}

export default Component;
