import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adonogbno.css';
import '../../css/i/ifn39hdbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="adonogbno"/><path class="ifn39hdbw"/></g>`,
		"fallback": "lets-icons:sign-in-squre",
	});
}

export default Component;
