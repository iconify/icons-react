import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee8eo33td.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee8eo33td"/>`,
		"fallback": "whh:psleft",
	});
}

export default Component;
