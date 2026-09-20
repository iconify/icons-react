import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duzol6b1s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duzol6b1s"/>`,
		"fallback": "roentgen:toll-booth",
	});
}

export default Component;
