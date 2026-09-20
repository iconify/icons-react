import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zakr_db6e.css';
import '../../css/v/vz43rbc3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zakr_db6e"/><path class="vz43rbc3j"/></g>`,
		"fallback": "lucide:satellite",
	});
}

export default Component;
