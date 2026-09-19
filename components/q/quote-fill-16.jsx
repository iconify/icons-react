import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7jzx_b7q.css';
import '../../css/r/rx4fkk1gf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7jzx_b7q"/><path class="rx4fkk1gf"/>`,
		"fallback": "garden:quote-fill-16",
	});
}

export default Component;
