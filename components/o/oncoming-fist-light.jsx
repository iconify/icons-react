import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3pba0m2o.css';
import '../../css/u/u700x2bqz.css';
import '../../css/v/v4jtg59fd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a3pba0m2o"/><path class="u700x2bqz"/><path class="v4jtg59fd"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-fist-light",
	});
}

export default Component;
