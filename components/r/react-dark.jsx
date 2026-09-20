import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a31m5zifr.css';
import '../../css/j/jex16cb_t.css';
import '../../css/u/ucocikvnm.css';

const viewBox = {"width":569,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a31m5zifr"><path class="jex16cb_t"/><path class="ucocikvnm"/></g>`,
		"fallback": "thesvg-color:react-dark",
	});
}

export default Component;
