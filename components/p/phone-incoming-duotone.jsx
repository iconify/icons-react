import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n802joiny.css';
import '../../css/h/hr9jb5p1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n802joiny"/><path class="hr9jb5p1y"/></g>`,
		"fallback": "keyline-icons:phone-incoming-duotone",
	});
}

export default Component;
