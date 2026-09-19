import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-ce26b-r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-ce26b-r"/>`,
		"fallback": "at-icons:quotation-marks",
	});
}

export default Component;
