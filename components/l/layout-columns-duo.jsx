import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rufn35b2j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/g/gyz95mbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rufn35b2j secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="gyz95mbzz"/></g>`,
		"fallback": "iconaut:layout-columns-duo",
	});
}

export default Component;
