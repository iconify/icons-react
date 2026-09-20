import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixh9d53ff.css';

const viewBox = {"width":6,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixh9d53ff"/>`,
		"fallback": "octicon:italic",
	});
}

export default Component;
