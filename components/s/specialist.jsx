import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6f3mn3in.css';
import '../../css/z/zw6fdactm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6f3mn3in"/><path class="zw6fdactm"/>`,
		"fallback": "vaadin:specialist",
	});
}

export default Component;
