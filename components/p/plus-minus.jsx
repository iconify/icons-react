import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibjd92y_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibjd92y_a"/>`,
		"fallback": "vaadin:plus-minus",
	});
}

export default Component;
