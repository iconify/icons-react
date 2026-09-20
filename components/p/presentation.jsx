import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pzijs_b6t.css';
import '../../css/m/m1h3ldbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pzijs_b6t"/><path class="m1h3ldbdx"/></g>`,
		"fallback": "streamline-sharp:presentation",
	});
}

export default Component;
