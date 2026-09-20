import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afsuv1qvc.css';
import '../../css/f/f7z4__6af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="afsuv1qvc"/><circle class="f7z4__6af"/></g>`,
		"fallback": "proicons:key",
	});
}

export default Component;
