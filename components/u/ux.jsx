import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn4c03_ef.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn4c03_ef"/>`,
		"fallback": "lineicons:ux",
	});
}

export default Component;
