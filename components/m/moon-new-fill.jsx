import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsn627f2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsn627f2e"/>`,
		"fallback": "meteocons:moon-new-fill",
	});
}

export default Component;
