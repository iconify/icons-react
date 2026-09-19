import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/i/iy87egbjv.css';
import '../../css/f/fv7etkbcn.css';
import '../../css/k/krd-pdbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="iy87egbjv"/><path class="fv7etkbcn"/><path class="krd-pdbsx"/></g>`,
		"fallback": "flowbite:keyboard-outline",
	});
}

export default Component;
