import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-fad59ft.css';
import '../../css/k/kckkv09ay.css';
import '../../css/e/eil_l0bql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-fad59ft"/><path class="kckkv09ay"/><path class="eil_l0bql"/></g>`,
		"fallback": "fluent-emoji-flat:t-rex",
	});
}

export default Component;
