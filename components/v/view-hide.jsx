import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpwfl8z9j.css';
import '../../css/k/k7umfem1u.css';
import '../../css/b/b2jj2nm-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cpwfl8z9j"/><path clip-rule="evenodd" class="k7umfem1u"/><path class="b2jj2nm-i"/></g>`,
		"fallback": "lets-icons:view-hide",
	});
}

export default Component;
