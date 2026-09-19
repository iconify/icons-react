import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6qgsn_0y.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6qgsn_0y"/>`,
		"fallback": "codicon:references",
	});
}

export default Component;
