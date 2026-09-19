import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cf6cc58cf.css';
import '../../css/e/e1-g6mxfo.css';
import '../../css/f/fs2x14b2h.css';
import '../../css/y/yv22s9oyq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cf6cc58cf"/><path class="e1-g6mxfo"/><path class="fs2x14b2h"/><path class="yv22s9oyq"/></g>`,
		"fallback": "fluent-emoji-flat:mechanical-leg",
	});
}

export default Component;
