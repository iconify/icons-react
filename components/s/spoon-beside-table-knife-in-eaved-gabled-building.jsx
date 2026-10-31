import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycty_-fbh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycty_-fbh"/>`,
		"fallback": "pinhead:spoon-beside-table-knife-in-eaved-gabled-building",
	});
}

export default Component;
