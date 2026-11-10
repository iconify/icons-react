import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2dl-4b8d.css';
import '../../css/m/mw9pchp5k.css';
import '../../css/r/r4s87stbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f2dl-4b8d"/><path class="mw9pchp5k"/><path class="r4s87stbt"/></g>`,
		"fallback": "andrsrxn:rotate",
	});
}

export default Component;
