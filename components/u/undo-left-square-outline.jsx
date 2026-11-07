import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqlyn7bvf.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqlyn7bvf"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:undo-left-square-outline",
	});
}

export default Component;
