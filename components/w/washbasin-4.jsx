import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l2v9pwb2m.css';
import '../../css/y/ydqcvhbpy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="l2v9pwb2m"/><path class="ydqcvhbpy"/></g>`,
		"fallback": "marketeq:washbasin-4",
	});
}

export default Component;
