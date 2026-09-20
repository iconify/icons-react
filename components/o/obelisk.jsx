import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxafg2elz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxafg2elz"/>`,
		"fallback": "roentgen:obelisk",
	});
}

export default Component;
