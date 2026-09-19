import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j070gkb1w.css';
import '../../css/x/xi7o5706u.css';
import '../../css/x/x00rglgfe.css';
import '../../css/m/m71q68trp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j070gkb1w"/><path class="xi7o5706u"/><path class="x00rglgfe"/><path class="m71q68trp"/>`,
		"fallback": "carbon:join-left",
	});
}

export default Component;
