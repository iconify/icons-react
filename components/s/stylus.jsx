import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3ofrjb9b.css';
import '../../css/j/j1hjbo5ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3ofrjb9b"/><path class="j1hjbo5ut"/>`,
		"fallback": "fontisto:stylus",
	});
}

export default Component;
