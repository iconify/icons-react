import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9698s6ed.css';
import '../../css/f/f_362pbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g9698s6ed"/><circle class="f_362pbxn"/></g>`,
		"fallback": "lucide:virus",
	});
}

export default Component;
