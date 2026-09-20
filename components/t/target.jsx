import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ol4mucpzz.css';
import '../../css/x/x9dhptb-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ol4mucpzz"/><path class="x9dhptb-b"/></g>`,
		"fallback": "streamline:target",
	});
}

export default Component;
