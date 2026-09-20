import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnatn192d.css';
import '../../css/c/czs8ohbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tnatn192d"/><path class="czs8ohbix"/></g>`,
		"fallback": "nrk:microphone-solid",
	});
}

export default Component;
