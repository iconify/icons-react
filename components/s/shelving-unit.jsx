import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g8tawybju.css';
import '../../css/a/a8if0ew5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g8tawybju"/><path class="a8if0ew5t"/></g>`,
		"fallback": "hugeicons:shelving-unit",
	});
}

export default Component;
