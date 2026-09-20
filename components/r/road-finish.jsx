import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/b7d7yybaj.css';
import '../../css/f/f5x9-gb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="b7d7yybaj"/><path class="f5x9-gb5o"/></g>`,
		"fallback": "lets-icons:road-finish",
	});
}

export default Component;
