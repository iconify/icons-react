import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3jwz5nip.css';
import '../../css/u/uquxg97-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x3jwz5nip"/><path class="uquxg97-c"/></g>`,
		"fallback": "coolicons:rainbow-duocolor-round",
	});
}

export default Component;
