import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw1b57b3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw1b57b3t"/>`,
		"fallback": "bi:vimeo",
	});
}

export default Component;
