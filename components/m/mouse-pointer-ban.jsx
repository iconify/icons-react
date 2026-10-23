import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f5gba8vmw.css';
import '../../css/n/nd8h23x4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f5gba8vmw"/><path class="nd8h23x4c"/></g>`,
		"fallback": "vadivam:mouse-pointer-ban",
	});
}

export default Component;
