import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g19d38ucn.css';
import '../../css/a/aaf9dhb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g19d38ucn"/><path class="aaf9dhb8c"/></g>`,
		"fallback": "keyline-icons:user-minus-fill",
	});
}

export default Component;
