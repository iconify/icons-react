import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urz-4cihd.css';
import '../../css/z/z77m1f6bv.css';
import '../../css/j/j1jcq5b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="urz-4cihd"/><path clip-rule="evenodd" class="z77m1f6bv"/><path class="j1jcq5b8i"/></g>`,
		"fallback": "lets-icons:user-scan-fill",
	});
}

export default Component;
