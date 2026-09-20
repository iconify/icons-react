import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xanc48bmb.css';
import '../../css/y/ydi54qb2a.css';
import '../../css/n/nc03m9bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xanc48bmb"/><path class="ydi54qb2a"/><path class="nc03m9bwt"/></g>`,
		"fallback": "lets-icons:paper-duotone",
	});
}

export default Component;
