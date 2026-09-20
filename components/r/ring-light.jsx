import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/ckmyj7xzo.css';
import '../../css/b/b0uwsz4ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ckmyj7xzo"/><path class="b0uwsz4ls"/></g>`,
		"fallback": "lets-icons:ring-light",
	});
}

export default Component;
