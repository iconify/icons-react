import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxf00_bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxf00_bft"/>`,
		"fallback": "mage:mouse",
	});
}

export default Component;
