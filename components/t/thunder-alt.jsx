import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez8bopsco.css';
import '../../css/i/io2oo-spz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez8bopsco"/><path class="io2oo-spz"/>`,
		"fallback": "lineicons:thunder-alt",
	});
}

export default Component;
