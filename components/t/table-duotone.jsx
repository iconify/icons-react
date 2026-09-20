import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl2nz2boo.css';
import '../../css/z/zgl_8cbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dl2nz2boo"/><path class="zgl_8cbax"/></g>`,
		"fallback": "keyline-icons:table-duotone",
	});
}

export default Component;
