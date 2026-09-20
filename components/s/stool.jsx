import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/a5q5blbqa.css';
import '../../css/o/oi5knwboq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="a5q5blbqa"/><path class="oi5knwboq"/></g>`,
		"fallback": "marketeq:stool",
	});
}

export default Component;
