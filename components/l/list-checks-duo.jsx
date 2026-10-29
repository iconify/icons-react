import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qb8r96btl.css';
import '../../css/o/o54qorbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qb8r96btl"/><path class="o54qorbnl wm-a"/></g>`,
		"fallback": "withicons:list-checks-duo",
	});
}

export default Component;
