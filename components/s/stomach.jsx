import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0-zxqbky.css';
import '../../css/p/p617vlwzy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nc_hz9_1i.css';
import '../../css/n/njbis9f4w.css';
import '../../css/y/y8gs3st7w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0-zxqbky"/><path class="p617vlwzy"/><g class="jn8qy4bru"><path class="nc_hz9_1i"/><path class="njbis9f4w"/><path class="y8gs3st7w"/></g>`,
		"fallback": "openmoji:stomach",
	});
}

export default Component;
