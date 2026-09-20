import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lefz1abwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lefz1abwf"/>`,
		"fallback": "thesvg:photobucket",
	});
}

export default Component;
