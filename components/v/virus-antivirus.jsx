import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sikv4to3k.css';
import '../../css/x/x9yv1kb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sikv4to3k"/><path class="x9yv1kb-t"/></g>`,
		"fallback": "streamline-sharp:virus-antivirus",
	});
}

export default Component;
