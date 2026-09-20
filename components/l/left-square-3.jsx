import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/on2xo7wdk.css';
import '../../css/b/b0euvlbxk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="on2xo7wdk"/><path class="b0euvlbxk"/></g>`,
		"fallback": "marketeq:left-square-3",
	});
}

export default Component;
