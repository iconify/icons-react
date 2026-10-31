import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm1d_swqj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm1d_swqj"/>`,
		"fallback": "pinhead:spoon-beside-table-knife-in-eaved-gabled-shelter",
	});
}

export default Component;
