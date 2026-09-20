import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9712kxlo.css';
import '../../css/a/ac__zhwzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9712kxlo"/><path class="ac__zhwzm"/></g>`,
		"fallback": "streamline-ultimate-color:list-numbers",
	});
}

export default Component;
