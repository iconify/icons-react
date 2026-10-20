import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k3ved_czi.css';
import '../../css/c/c2goahbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k3ved_czi"/><path class="c2goahbpd"/></g>`,
		"fallback": "vadivam:school",
	});
}

export default Component;
