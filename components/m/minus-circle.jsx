import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csr1j5bxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csr1j5bxk"/>`,
		"fallback": "vaadin:minus-circle",
	});
}

export default Component;
