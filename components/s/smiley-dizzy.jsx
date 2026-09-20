import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2jkth9an.css';
import '../../css/p/ph3npob9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2jkth9an"/><path class="ph3npob9p"/>`,
		"fallback": "streamline-freehand:smiley-dizzy",
	});
}

export default Component;
