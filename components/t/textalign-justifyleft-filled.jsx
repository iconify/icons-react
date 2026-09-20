import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c97p6wa7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c97p6wa7m"/>`,
		"fallback": "reicon:textalign-justifyleft-filled",
	});
}

export default Component;
