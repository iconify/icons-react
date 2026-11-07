import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1j0ccckq.css';
import '../../css/b/bdli7f47j.css';
import '../../css/x/xe1ahotxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1j0ccckq"/><path class="bdli7f47j"/><path class="xe1ahotxu"/>`,
		"fallback": "solar:lightbulb-bold-duotone",
	});
}

export default Component;
