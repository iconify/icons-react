import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aznjexj9u.css';
import '../../css/h/hb91leb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aznjexj9u"/><path class="hb91leb0t"/></g>`,
		"fallback": "lets-icons:sign-in-circle",
	});
}

export default Component;
