import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk6lt2bsx.css';
import '../../css/k/kiuf6hbjh.css';
import '../../css/o/om3-e-bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uk6lt2bsx"/><circle transform="rotate(90 12 12)" class="kiuf6hbjh"/><path class="om3-e-bbf"/></g>`,
		"fallback": "andrsrxn:play-circle",
	});
}

export default Component;
