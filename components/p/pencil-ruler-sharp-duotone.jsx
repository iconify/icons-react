import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ov3kx17-r.css';
import '../../css/f/fm9itxbgo.css';
import '../../css/r/r7qwbt-ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ov3kx17-r"/><path class="fm9itxbgo"/><path class="r7qwbt-ac"/></g>`,
		"fallback": "keyline-icons:pencil-ruler-sharp-duotone",
	});
}

export default Component;
