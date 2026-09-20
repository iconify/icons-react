import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2zqv_bcf.css';
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
		"content": `<g class="s2zqv_bcf"><path class="jex16cb_t"/><path class="ucocikvnm"/></g>`,
		"fallback": "thesvg-color:react-light",
	});
}

export default Component;
