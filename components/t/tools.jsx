import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5t20yy7y.css';
import '../../css/k/k662d66uk.css';
import '../../css/p/p1a-x02dg.css';
import '../../css/y/y8wsa_bcp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5t20yy7y"/><path class="k662d66uk"/><path class="p1a-x02dg"/><path class="y8wsa_bcp"/>`,
		"fallback": "formkit:tools",
	});
}

export default Component;
