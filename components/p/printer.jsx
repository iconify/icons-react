import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duy2efe8d.css';
import '../../css/x/xfkz85b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="duy2efe8d"/><path clip-rule="evenodd" class="xfkz85b9z"/></g>`,
		"fallback": "majesticons:printer",
	});
}

export default Component;
