import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sv8qjzb9q.css';
import '../../css/g/g0ggjib8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="sv8qjzb9q"/><path class="g0ggjib8i"/></g>`,
		"fallback": "humbleicons:plus-circle",
	});
}

export default Component;
