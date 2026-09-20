import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_pr8ov3n.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_pr8ov3n"/>`,
		"fallback": "maki:religious-shinto-11",
	});
}

export default Component;
