import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knt-4n5fd.css';
import '../../css/z/zu5txb9-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="knt-4n5fd"/><path class="zu5txb9-o"/></g>`,
		"fallback": "coolicons:running-duotone-round",
	});
}

export default Component;
