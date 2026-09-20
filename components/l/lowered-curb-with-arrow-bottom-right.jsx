import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr6ny4mjd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr6ny4mjd"/>`,
		"fallback": "pinhead:lowered-curb-with-arrow-bottom-right",
	});
}

export default Component;
