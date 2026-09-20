import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd7ayf6fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd7ayf6fu"/>`,
		"fallback": "thesvg-color:teradata",
	});
}

export default Component;
