import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq6qj3b9f.css';
import '../../css/d/d_ic3kbus.css';
import '../../css/x/xv20pn3tn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq6qj3b9f"/><path class="d_ic3kbus"/><path class="xv20pn3tn"/>`,
		"fallback": "selfhst:langfuse",
	});
}

export default Component;
