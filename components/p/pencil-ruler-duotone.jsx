import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ov3kx17-r.css';
import '../../css/f/f8hm-2p5o.css';
import '../../css/g/gffkyipjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ov3kx17-r"/><path class="f8hm-2p5o"/><path class="gffkyipjs"/></g>`,
		"fallback": "keyline-icons:pencil-ruler-duotone",
	});
}

export default Component;
