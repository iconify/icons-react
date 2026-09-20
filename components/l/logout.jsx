import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_z032b1f.css';
import '../../css/c/cv41br6ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n_z032b1f"/><path class="cv41br6ua"/></g>`,
		"fallback": "tabler:logout",
	});
}

export default Component;
