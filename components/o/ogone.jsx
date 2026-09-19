import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0m1llf5w.css';

const viewBox = {"width":461,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0m1llf5w"/>`,
		"fallback": "file-icons:ogone",
	});
}

export default Component;
