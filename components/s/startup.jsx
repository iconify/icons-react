import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y2rzy0ntd.css';
import '../../css/b/bti7ibcst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y2rzy0ntd"/><path class="bti7ibcst"/></g>`,
		"fallback": "streamline-sharp:startup",
	});
}

export default Component;
