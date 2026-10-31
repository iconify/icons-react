import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0r7aeb5z.css';
import '../../css/p/p_n_-nbql.css';
import '../../css/q/qu3n-1kvd.css';
import '../../css/u/u7os-98fh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0r7aeb5z"/><circle class="p_n_-nbql"/><circle class="qu3n-1kvd"/><circle class="u7os-98fh"/>`,
		"fallback": "ooui:suggested-investigations",
	});
}

export default Component;
