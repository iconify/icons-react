import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke56rmbqs.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke56rmbqs"/>`,
		"fallback": "maki:shelter-11",
	});
}

export default Component;
