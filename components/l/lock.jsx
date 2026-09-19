import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk9mcoe9t.css';

const viewBox = {"width":1152,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk9mcoe9t"/>`,
		"fallback": "fa:lock",
	});
}

export default Component;
