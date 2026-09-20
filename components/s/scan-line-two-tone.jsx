import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-_3y1_8e.css';
import '../../css/w/weddopsmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-_3y1_8e"/><path class="weddopsmh"/></g>`,
		"fallback": "keyline-icons:scan-line-two-tone",
	});
}

export default Component;
