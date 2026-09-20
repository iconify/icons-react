import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/txdb5nb5a.css';
import '../../css/g/gmcpsli4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="txdb5nb5a"/><path class="gmcpsli4e"/></g>`,
		"fallback": "keyline-icons:toggle-off-duotone",
	});
}

export default Component;
