import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnw561b3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnw561b3x"/>`,
		"fallback": "roentgen:vending-ice-cream-cone",
	});
}

export default Component;
