import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-xl5827d.css';
import '../../css/p/pa2ir-bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y-xl5827d"/><path class="pa2ir-bee"/></g>`,
		"fallback": "tabler:mood-suprised",
	});
}

export default Component;
