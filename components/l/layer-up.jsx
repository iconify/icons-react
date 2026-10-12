import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtvxbqnof.css';
import '../../css/m/m4tuw-bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dtvxbqnof"/><path class="m4tuw-bnl"/></g>`,
		"fallback": "andrsrxn:layer-up",
	});
}

export default Component;
