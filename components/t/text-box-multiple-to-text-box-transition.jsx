import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/g/g_wfhb.css';
import '../../css/j/jin-gx.css';
import '../../css/d/d-0mee5h.css';
import '../../css/d/d-r5jj3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c g_wfhb"/><path class="a0m25c jin-gx"/>`,
		"fallback": "line-md:text-box-multiple-to-text-box-transition",
	});
}

export default Component;
