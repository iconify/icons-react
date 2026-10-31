import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fh3q09bcw.css';
import '../../css/d/ddy5w7b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fh3q09bcw"/><path class="ddy5w7b7k"/></g>`,
		"fallback": "coolicons:picture-in-picture-duotone-round",
	});
}

export default Component;
