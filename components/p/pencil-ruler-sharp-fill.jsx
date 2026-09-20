import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fm9itxbgo.css';
import '../../css/s/sp7mfjblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fm9itxbgo"/><path class="sp7mfjblz"/></g>`,
		"fallback": "keyline-icons:pencil-ruler-sharp-fill",
	});
}

export default Component;
