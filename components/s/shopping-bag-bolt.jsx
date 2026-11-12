import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ihdl93buw.css';
import '../../css/p/p19x_z4-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ihdl93buw"/><path class="p19x_z4-c"/></g>`,
		"fallback": "tabler:shopping-bag-bolt",
	});
}

export default Component;
