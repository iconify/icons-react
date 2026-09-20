import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rvgdju18m.css';
import '../../css/k/kx8b9id_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rvgdju18m"/><path class="kx8b9id_s"/></g>`,
		"fallback": "solar:star-ring-outline",
	});
}

export default Component;
