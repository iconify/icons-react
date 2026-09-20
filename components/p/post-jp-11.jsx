import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b95q12b_r.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b95q12b_r"/>`,
		"fallback": "maki:post-jp-11",
	});
}

export default Component;
