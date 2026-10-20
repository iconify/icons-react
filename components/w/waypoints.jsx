import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ph_p9-gqk.css';
import '../../css/f/fh8u15b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ph_p9-gqk"/><path class="fh8u15b1j"/></g>`,
		"fallback": "vadivam:waypoints",
	});
}

export default Component;
