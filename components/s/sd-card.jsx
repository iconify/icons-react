import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bikzohbca.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bikzohbca"/>`,
		"fallback": "fa7-solid:sd-card",
	});
}

export default Component;
