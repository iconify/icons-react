import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryd9gmy8v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryd9gmy8v"/>`,
		"fallback": "garden:palette-fill-16",
	});
}

export default Component;
