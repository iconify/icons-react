import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cp7z90b6o.css';
import '../../css/f/f1u9n4bqt.css';
import '../../css/j/j1lwyvbxb.css';
import '../../css/f/f35-b8xpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cp7z90b6o wm-shadow"/><path class="f1u9n4bqt wm-shadow"/><path class="j1lwyvbxb"/><path class="f35-b8xpp"/></g>`,
		"fallback": "withicons-brutal:rss",
	});
}

export default Component;
