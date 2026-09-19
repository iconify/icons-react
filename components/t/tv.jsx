import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l_iysxblp.css';
import '../../css/o/oykyqvv2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="l_iysxblp"/><path class="oykyqvv2a"/></g>`,
		"fallback": "feather:tv",
	});
}

export default Component;
