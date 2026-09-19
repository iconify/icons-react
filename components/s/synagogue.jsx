import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmrnihv4c.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmrnihv4c"/>`,
		"fallback": "fa6-solid:synagogue",
	});
}

export default Component;
