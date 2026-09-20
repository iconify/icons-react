import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h8qj45bdj.css';
import '../../css/s/spwb3dbss.css';
import '../../css/j/jup7mqu6s.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="h8qj45bdj"/><path class="spwb3dbss"/><path class="jup7mqu6s"/></g>`,
		"fallback": "marketeq:lawn-mower",
	});
}

export default Component;
