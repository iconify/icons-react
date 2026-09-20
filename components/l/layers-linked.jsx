import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dn3-kib-z.css';
import '../../css/r/r2t469bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dn3-kib-z"/><path class="r2t469bvy"/></g>`,
		"fallback": "tabler:layers-linked",
	});
}

export default Component;
