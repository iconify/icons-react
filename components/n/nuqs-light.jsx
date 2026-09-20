import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk0l00b2f.css';
import '../../css/d/dezuy7r0y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uk0l00b2f"/><path class="dezuy7r0y"/></g>`,
		"fallback": "thesvg-color:nuqs-light",
	});
}

export default Component;
