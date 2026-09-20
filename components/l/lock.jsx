import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jvr3rsbfk.css';
import '../../css/k/krgrdnx9t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jvr3rsbfk"/><path class="krgrdnx9t"/></g>`,
		"fallback": "marketeq:lock",
	});
}

export default Component;
