import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n68ow4zez.css';
import '../../css/k/kcmddip8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n68ow4zez"/><path class="kcmddip8a"/></g>`,
		"fallback": "andrsrxn:platter",
	});
}

export default Component;
