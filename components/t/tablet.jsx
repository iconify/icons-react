import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2u8uksmb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2u8uksmb"/>`,
		"fallback": "vaadin:tablet",
	});
}

export default Component;
