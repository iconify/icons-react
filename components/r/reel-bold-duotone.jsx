import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ef4t540_c.css';
import '../../css/g/gjtfqlb3r.css';
import '../../css/h/h1c-_2s9r.css';
import '../../css/v/vsobki5ny.css';
import '../../css/n/n7swwqbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ef4t540_c"/><path class="gjtfqlb3r"/><path class="h1c-_2s9r"/><path class="vsobki5ny"/><path class="n7swwqbdq"/></g>`,
		"fallback": "solar:reel-bold-duotone",
	});
}

export default Component;
