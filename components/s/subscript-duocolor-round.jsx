import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8nur_b4z.css';
import '../../css/v/vsru03jnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c8nur_b4z"/><path class="vsru03jnb"/></g>`,
		"fallback": "coolicons:subscript-duocolor-round",
	});
}

export default Component;
