import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwa4pl89p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwa4pl89p"/>`,
		"fallback": "devicon-plain:okta",
	});
}

export default Component;
