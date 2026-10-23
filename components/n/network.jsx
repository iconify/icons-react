import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gznz5j5ae.css';
import '../../css/n/n_naf4z-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gznz5j5ae"/><path class="n_naf4z-j"/></g>`,
		"fallback": "vadivam:network",
	});
}

export default Component;
