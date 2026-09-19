import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szn9f3b9w.css';
import '../../css/a/axzoto0sm.css';
import '../../css/j/jnctvnbwd.css';
import '../../css/r/rptojzb5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szn9f3b9w"/><path class="axzoto0sm"/><path class="jnctvnbwd"/><path class="rptojzb5f"/>`,
		"fallback": "fxemoji:sunrise",
	});
}

export default Component;
