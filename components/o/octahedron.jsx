import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekm_tyd2k.css';
import '../../css/e/eam0xdz_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ekm_tyd2k"/><path class="eam0xdz_o"/></g>`,
		"fallback": "tabler:octahedron",
	});
}

export default Component;
