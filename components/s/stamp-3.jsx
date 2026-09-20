import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c4fm6-2sy.css';
import '../../css/y/y2xfurbdd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c4fm6-2sy"/><path class="y2xfurbdd"/></g>`,
		"fallback": "marketeq:stamp-3",
	});
}

export default Component;
