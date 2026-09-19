import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4fb2tf6s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4fb2tf6s"/>`,
		"fallback": "garden:markup-stroke-12",
	});
}

export default Component;
