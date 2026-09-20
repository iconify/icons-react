import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ptt7i7bwb.css';
import '../../css/v/vqazt98vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ptt7i7bwb"/><path clip-rule="evenodd" class="vqazt98vt"/></g>`,
		"fallback": "keyline-icons:swatch-book-duotone",
	});
}

export default Component;
