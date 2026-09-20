import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swzvif2pt.css';
import '../../css/d/d87521bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="swzvif2pt"/><path class="d87521bpc"/></g>`,
		"fallback": "tabler:lock-minus",
	});
}

export default Component;
