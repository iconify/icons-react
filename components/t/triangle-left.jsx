import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9hgbnx1z.css';

const viewBox = {"width":6,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9hgbnx1z"/>`,
		"fallback": "octicon:triangle-left",
	});
}

export default Component;
