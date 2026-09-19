import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4r97gk-c.css';

const viewBox = {"width":683,"height":819};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4r97gk-c"/>`,
		"fallback": "ls:kudakurage",
	});
}

export default Component;
