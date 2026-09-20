import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5hfmr3-c.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5hfmr3-c"/>`,
		"fallback": "maki:school-11",
	});
}

export default Component;
