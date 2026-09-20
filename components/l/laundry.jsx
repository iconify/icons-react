import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq1me686k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq1me686k"/>`,
		"fallback": "map:laundry",
	});
}

export default Component;
