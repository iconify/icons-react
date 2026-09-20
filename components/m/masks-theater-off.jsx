import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n8-ke9u1a.css';
import '../../css/j/jddwsyhuu.css';
import '../../css/a/amvt50b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n8-ke9u1a"/><path class="jddwsyhuu"/><path class="amvt50b9s"/></g>`,
		"fallback": "tabler:masks-theater-off",
	});
}

export default Component;
