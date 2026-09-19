import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3gqwcb8t.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3gqwcb8t"/>`,
		"fallback": "fa6-solid:paragraph",
	});
}

export default Component;
