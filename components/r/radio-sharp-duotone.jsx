import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g0wdbbh0b.css';
import '../../css/i/i3pcmrmmi.css';
import '../../css/k/k3wcmpbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g0wdbbh0b"/><path class="i3pcmrmmi"/><path clip-rule="evenodd" class="k3wcmpbyh"/></g>`,
		"fallback": "keyline-icons:radio-sharp-duotone",
	});
}

export default Component;
