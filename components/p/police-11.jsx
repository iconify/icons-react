import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch76cibil.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch76cibil"/>`,
		"fallback": "maki:police-11",
	});
}

export default Component;
