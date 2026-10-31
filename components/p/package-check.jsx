import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iavtzwb4q.css';
import '../../css/t/t1lkh8bqh.css';
import '../../css/m/mw9k55b3g.css';
import '../../css/w/wbypqzodk.css';
import '../../css/y/y_a_zweiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="iavtzwb4q wm-shadow"/><path class="t1lkh8bqh wm-shadow"/><path class="mw9k55b3g"/><path class="wbypqzodk"/><path class="wm-s y_a_zweiz"/></g>`,
		"fallback": "withicons-brutal:package-check",
	});
}

export default Component;
