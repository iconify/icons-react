import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2jbinb3y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2jbinb3y"/>`,
		"fallback": "octicon:no-entry-fill-12",
	});
}

export default Component;
