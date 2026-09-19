import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy63w085a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy63w085a"/>`,
		"fallback": "hugeicons:table-cells-split",
	});
}

export default Component;
