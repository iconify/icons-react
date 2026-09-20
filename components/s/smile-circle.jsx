import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwdfh5sjh.css';
import '../../css/g/gbik_er2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iwdfh5sjh"/><path class="gbik_er2h"/></g>`,
		"fallback": "reicon:smile-circle",
	});
}

export default Component;
