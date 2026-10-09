import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwcvxfb2t.css';
import '../../css/y/yo1jbmxse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwcvxfb2t"/><path class="yo1jbmxse"/>`,
		"fallback": "energy-icons:mug-20-bold",
	});
}

export default Component;
