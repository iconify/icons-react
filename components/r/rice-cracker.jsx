import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4a30goro.css';
import '../../css/y/ysa61-b5q.css';
import '../../css/b/bcacejddh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4a30goro"/><path class="ysa61-b5q"/><path class="bcacejddh"/></g>`,
		"fallback": "fluent-emoji-flat:rice-cracker",
	});
}

export default Component;
