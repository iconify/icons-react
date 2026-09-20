import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vxo3gieyf.css';
import '../../css/n/nkl72kbds.css';
import '../../css/s/s6hayrb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vxo3gieyf"/><path class="nkl72kbds"/><path class="s6hayrb0i"/></g>`,
		"fallback": "tabler:storm",
	});
}

export default Component;
