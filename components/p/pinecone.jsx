import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0b91xnmk.css';
import '../../css/s/s4e00vcxg.css';
import '../../css/a/amvtuxlau.css';
import '../../css/i/ioasb8b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r0b91xnmk"/><path class="s4e00vcxg"/><path class="amvtuxlau"/><path class="ioasb8b3h"/></g>`,
		"fallback": "iconaut:pinecone",
	});
}

export default Component;
