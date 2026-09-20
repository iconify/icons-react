import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avxsmbc0e.css';
import '../../css/t/tyy5pn3_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avxsmbc0e"/><path class="tyy5pn3_l"/>`,
		"fallback": "vaadin:viewport",
	});
}

export default Component;
