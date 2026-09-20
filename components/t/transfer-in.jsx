import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7vfb5bfa.css';
import '../../css/p/pp06ooulm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m7vfb5bfa"/><path class="pp06ooulm"/></g>`,
		"fallback": "tabler:transfer-in",
	});
}

export default Component;
