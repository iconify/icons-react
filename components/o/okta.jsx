import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtwq637wt.css';
import '../../css/r/rbu9ceb1c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtwq637wt"/><path class="rbu9ceb1c"/>`,
		"fallback": "devicon:okta",
	});
}

export default Component;
