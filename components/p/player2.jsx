import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gic1lptei.css';
import '../../css/r/ro345yboz.css';
import '../../css/j/jb6rr0b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gic1lptei"><path class="ro345yboz"/><path class="jb6rr0b4a"/></g>`,
		"fallback": "thesvg-color:player2",
	});
}

export default Component;
