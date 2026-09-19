import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enxacl_1m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enxacl_1m"/>`,
		"fallback": "cryptocurrency:taas",
	});
}

export default Component;
