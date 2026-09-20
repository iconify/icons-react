import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b3t24beff.css';
import '../../css/c/czce4sp6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b3t24beff"/><path class="czce4sp6r"/></g>`,
		"fallback": "streamline-sharp:pictures-folder-memories",
	});
}

export default Component;
