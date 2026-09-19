import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xqyp4q2de.css';
import '../../css/b/brqvdqb4k.css';
import '../../css/q/qiw5s9b3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="xqyp4q2de"/><path class="brqvdqb4k"/><path class="qiw5s9b3c"/></g>`,
		"fallback": "icon-park-outline:transport",
	});
}

export default Component;
