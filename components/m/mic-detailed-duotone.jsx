import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_khlqbtr.css';
import '../../css/w/w0-6uhbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_khlqbtr"/><path class="w0-6uhbpc"/></g>`,
		"fallback": "si:mic-detailed-duotone",
	});
}

export default Component;
