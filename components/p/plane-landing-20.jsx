import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyo6-384c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyo6-384c"/>`,
		"fallback": "energy-icons:plane-landing-20",
	});
}

export default Component;
