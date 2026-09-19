import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rje_9tbdc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rje_9tbdc"/>`,
		"fallback": "at-icons:missile",
	});
}

export default Component;
