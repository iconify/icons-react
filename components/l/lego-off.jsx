import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gzexv_s5q.css';
import '../../css/h/h_kc31mec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gzexv_s5q"/><path class="h_kc31mec"/></g>`,
		"fallback": "tabler:lego-off",
	});
}

export default Component;
