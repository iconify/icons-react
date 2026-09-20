import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4z4o6b3q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4z4o6b3q"/>`,
		"fallback": "thesvg:netbox",
	});
}

export default Component;
