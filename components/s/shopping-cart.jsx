import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eonu4gdjh.css';
import '../../css/h/h0x4ycc5d.css';
import '../../css/u/uf8pr7bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="eonu4gdjh"/><circle class="h0x4ycc5d"/><path class="uf8pr7bxn"/></g>`,
		"fallback": "feather:shopping-cart",
	});
}

export default Component;
