import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqhi0svru.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqhi0svru"/>`,
		"fallback": "lineicons:school-bench-alt",
	});
}

export default Component;
