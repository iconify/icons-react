import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n71q48o2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n71q48o2f"/>`,
		"fallback": "fa-solid:moon",
	});
}

export default Component;
