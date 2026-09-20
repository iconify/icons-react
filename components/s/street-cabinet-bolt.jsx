import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnqr_2bab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnqr_2bab"/>`,
		"fallback": "roentgen:street-cabinet-bolt",
	});
}

export default Component;
