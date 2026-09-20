import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amr5z33uf.css';
import '../../css/v/vxfukemug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="amr5z33uf"/><path class="vxfukemug"/></g>`,
		"fallback": "keyline-icons:pencil-ruler-two-tone",
	});
}

export default Component;
