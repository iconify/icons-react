import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e9kwfkb1m.css';
import '../../css/z/zkrreabxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e9kwfkb1m"/><path class="zkrreabxq"/></g>`,
		"fallback": "streamline-sharp:shipping-box-1",
	});
}

export default Component;
