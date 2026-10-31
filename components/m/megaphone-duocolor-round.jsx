import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9vxpxqky.css';
import '../../css/f/fdzmn7ijz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g9vxpxqky"/><path class="fdzmn7ijz"/></g>`,
		"fallback": "coolicons:megaphone-duocolor-round",
	});
}

export default Component;
