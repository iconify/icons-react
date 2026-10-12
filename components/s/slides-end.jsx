import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x69sg6bxb.css';
import '../../css/u/uzypqwbss.css';
import '../../css/v/v1pciub8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.23 20.43)" class="x69sg6bxb"/><rect transform="matrix(0 -1 -1 0 22.23 20.43)" class="uzypqwbss"/><path class="v1pciub8f"/></g>`,
		"fallback": "andrsrxn:slides-end",
	});
}

export default Component;
