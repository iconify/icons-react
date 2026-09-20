import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_tqupv-j.css';
import '../../css/v/v0w363bys.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_tqupv-j"/><path class="v0w363bys"/>`,
		"fallback": "iwwa:remove-15m",
	});
}

export default Component;
