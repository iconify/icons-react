import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0k1vsbsw.css';
import '../../css/y/yx4cbx2ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p0k1vsbsw"/><path class="yx4cbx2ij"/></g>`,
		"fallback": "tabler:scale-outline",
	});
}

export default Component;
