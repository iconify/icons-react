import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irfjh1x1u.css';
import '../../css/y/y0k_xop1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irfjh1x1u"/><path class="y0k_xop1b"/>`,
		"fallback": "vaadin:picture",
	});
}

export default Component;
