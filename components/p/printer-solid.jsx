import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsdmhbcob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsdmhbcob"/>`,
		"fallback": "rivet-icons:printer-solid",
	});
}

export default Component;
