import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z53jxozwx.css';
import '../../css/v/vqazt98vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z53jxozwx"/><path clip-rule="evenodd" class="vqazt98vt"/></g>`,
		"fallback": "keyline-icons:swatch-book-fill",
	});
}

export default Component;
