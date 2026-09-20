import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmg9kobid.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmg9kobid"/>`,
		"fallback": "octicon:settings",
	});
}

export default Component;
