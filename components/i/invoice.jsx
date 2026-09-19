import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rceu23b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rceu23b6g"/>`,
		"fallback": "iconamoon:invoice",
	});
}

export default Component;
