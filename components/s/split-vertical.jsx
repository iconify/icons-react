import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g54y4lblw.css';
import '../../css/y/y_gz6g1bt.css';
import '../../css/m/mjhxvsbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 4.59 22.2)" class="g54y4lblw"/><rect transform="rotate(-90 4.59 22.2)" class="y_gz6g1bt"/><path class="mjhxvsbch"/></g>`,
		"fallback": "andrsrxn:split-vertical",
	});
}

export default Component;
