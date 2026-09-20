import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5c6_gbgf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5c6_gbgf"/>`,
		"fallback": "picon:sad",
	});
}

export default Component;
