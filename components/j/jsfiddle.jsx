import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a8f89lj8i.css';
import '../../css/i/izmy2yb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a8f89lj8i"/><path class="izmy2yb3u"/></g>`,
		"fallback": "lineicons:jsfiddle",
	});
}

export default Component;
