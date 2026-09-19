import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8qvatbmo.css';
import '../../css/f/frmaiuqif.css';
import '../../css/k/kgc92-xoj.css';
import '../../css/w/w032bpbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8qvatbmo"/><path class="frmaiuqif"/><path class="kgc92-xoj"/><path class="w032bpbfm"/></g>`,
		"fallback": "hugeicons:squirrel",
	});
}

export default Component;
