import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3pnzib4i.css';
import '../../css/d/dqshecczl.css';
import '../../css/c/c3w9l72hp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3pnzib4i"/><path class="dqshecczl"/><path class="c3w9l72hp"/>`,
		"fallback": "fluent-emoji-high-contrast:man-tipping-hand",
	});
}

export default Component;
