import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehiw4ce2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehiw4ce2x"/>`,
		"fallback": "vaadin:share",
	});
}

export default Component;
