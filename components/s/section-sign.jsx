import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3m2-9bgu.css';
import '../../css/v/vxo3gieyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x3m2-9bgu"/><path class="vxo3gieyf"/></g>`,
		"fallback": "tabler:section-sign",
	});
}

export default Component;
