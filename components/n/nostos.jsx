import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7b6qsb4o.css';
import '../../css/j/ju78x-kpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7b6qsb4o"/><path class="ju78x-kpz"/>`,
		"fallback": "selfhst:nostos",
	});
}

export default Component;
