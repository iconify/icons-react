import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le02kybtb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le02kybtb"/>`,
		"fallback": "pinhead:spoon-beside-table-knife",
	});
}

export default Component;
