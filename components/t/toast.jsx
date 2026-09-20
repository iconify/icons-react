import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgbi8kb7f.css';
import '../../css/o/o9w11v01a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgbi8kb7f"/><rect class="o9w11v01a"/></g>`,
		"fallback": "proicons:toast",
	});
}

export default Component;
