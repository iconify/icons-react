import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0im107ld.css';
import '../../css/p/p0_-1ln6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h0im107ld"/><path class="p0_-1ln6g"/></g>`,
		"fallback": "tabler:toggle-right",
	});
}

export default Component;
