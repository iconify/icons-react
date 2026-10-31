import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tobwpcb4t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tobwpcb4t"/>`,
		"fallback": "pinhead:spoon-beside-table-knife-under-gabled-roof",
	});
}

export default Component;
