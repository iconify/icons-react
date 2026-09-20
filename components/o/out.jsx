import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o27r778ow.css';
import '../../css/i/iq9a7xo1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o27r778ow"/><path class="iq9a7xo1u"/>`,
		"fallback": "vaadin:out",
	});
}

export default Component;
