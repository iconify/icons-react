import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi4280bdv.css';

const viewBox = {"width":628,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi4280bdv"/>`,
		"fallback": "ls:present",
	});
}

export default Component;
