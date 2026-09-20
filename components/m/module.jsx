import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z5dcfx6bk.css';
import '../../css/h/h9znldyeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z5dcfx6bk"/><path class="h9znldyeo"/></g>`,
		"fallback": "streamline-sharp:module",
	});
}

export default Component;
