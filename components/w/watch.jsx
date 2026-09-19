import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_0txgq_w.css';
import '../../css/f/fbebt8bdc.css';
import '../../css/c/chwmxcbud.css';
import '../../css/u/urdzw7bud.css';
import '../../css/r/rln4xwbaf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_0txgq_w"/><path class="fbebt8bdc"/><path class="chwmxcbud"/><path class="urdzw7bud"/><path class="rln4xwbaf"/></g>`,
		"fallback": "fluent-emoji-flat:watch",
	});
}

export default Component;
