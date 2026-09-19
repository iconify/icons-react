import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jog5b1b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jog5b1b3n"/>`,
		"fallback": "gg:play-list-remove",
	});
}

export default Component;
