import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqiw7wq1k.css';
import '../../css/u/u_7j5cbnz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqiw7wq1k"/><path class="u_7j5cbnz"/>`,
		"fallback": "energy-icons:used-cooking-oil-48",
	});
}

export default Component;
