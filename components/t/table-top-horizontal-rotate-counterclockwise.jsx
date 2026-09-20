import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rftvm9l3a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rftvm9l3a"/>`,
		"fallback": "memory:table-top-horizontal-rotate-counterclockwise",
	});
}

export default Component;
