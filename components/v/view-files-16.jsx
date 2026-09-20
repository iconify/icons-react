import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v28a9t3ye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v28a9t3ye"/>`,
		"fallback": "octicon:view-files-16",
	});
}

export default Component;
