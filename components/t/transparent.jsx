import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-_w7g1rt.css';
import '../../css/e/emt3dcw1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a-_w7g1rt"/><path class="emt3dcw1r"/></g>`,
		"fallback": "streamline-sharp:transparent",
	});
}

export default Component;
