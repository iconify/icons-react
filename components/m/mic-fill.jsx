import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kxl3k0b4w.css';
import '../../css/o/o-qq-c8-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kxl3k0b4w"/><path class="o-qq-c8-s"/></g>`,
		"fallback": "keyline-icons:mic-fill",
	});
}

export default Component;
