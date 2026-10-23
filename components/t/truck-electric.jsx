import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv3zxeb_i.css';
import '../../css/k/kdpkh7bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bv3zxeb_i"/><path class="kdpkh7bsp"/></g>`,
		"fallback": "vadivam:truck-electric",
	});
}

export default Component;
