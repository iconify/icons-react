import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/onn0kgqkl.css';
import '../../css/w/w8j7v4b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="onn0kgqkl"/><path class="w8j7v4b8f"/></g>`,
		"fallback": "tabler:soccer-field",
	});
}

export default Component;
