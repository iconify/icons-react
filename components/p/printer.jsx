import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lpyv3bhvh.css';
import '../../css/m/mto1a6gii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lpyv3bhvh"/><rect class="mto1a6gii"/></g>`,
		"fallback": "lucide:printer",
	});
}

export default Component;
