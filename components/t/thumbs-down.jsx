import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5oomfchl.css';
import '../../css/p/pgi1m9kqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h5oomfchl"/><path class="pgi1m9kqc"/></g>`,
		"fallback": "akar-icons:thumbs-down",
	});
}

export default Component;
