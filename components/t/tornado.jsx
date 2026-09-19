import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3jsffb5o.css';
import '../../css/g/gzfb33dlb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3jsffb5o"/><path class="gzfb33dlb"/></g>`,
		"fallback": "fluent-emoji-flat:tornado",
	});
}

export default Component;
