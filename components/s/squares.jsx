import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-db3-m3r.css';
import '../../css/c/cyr29ulco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d-db3-m3r"/><path class="cyr29ulco"/></g>`,
		"fallback": "tabler:squares",
	});
}

export default Component;
