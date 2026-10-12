import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ug1rf346f.css';
import '../../css/v/vfomhdbah.css';
import '../../css/s/s3330sbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.2 19.25)" class="ug1rf346f"/><rect transform="matrix(0 -1 -1 0 22.2 19.25)" class="vfomhdbah"/><path class="s3330sbyk"/></g>`,
		"fallback": "andrsrxn:screenshot-horizontal",
	});
}

export default Component;
