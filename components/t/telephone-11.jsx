import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rco92cb3w.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rco92cb3w"/>`,
		"fallback": "maki:telephone-11",
	});
}

export default Component;
