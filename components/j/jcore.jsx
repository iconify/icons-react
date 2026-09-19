import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxhnzt73g.css';

const viewBox = {"width":1026,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxhnzt73g"/>`,
		"fallback": "whh:jcore",
	});
}

export default Component;
