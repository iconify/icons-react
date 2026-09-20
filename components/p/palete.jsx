import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov5ht6eqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov5ht6eqo"/>`,
		"fallback": "vaadin:palete",
	});
}

export default Component;
