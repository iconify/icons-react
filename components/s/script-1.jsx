import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/c4ks21rmq.css';
import '../../css/k/kvh9ngb5d.css';
import '../../css/u/u2xcxj5go.css';
import '../../css/e/eh063druj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="c4ks21rmq"/><path class="kvh9ngb5d"/><path class="u2xcxj5go"/><path class="eh063druj"/></g>`,
		"fallback": "streamline-sharp-color:script-1",
	});
}

export default Component;
