import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xh3xwnbnn.css';
import '../../css/c/c3fqsnlyc.css';
import '../../css/d/dgjqt8bah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xh3xwnbnn"/><path class="c3fqsnlyc"/><path class="dgjqt8bah"/></g>`,
		"fallback": "icon-park-outline:uterus",
	});
}

export default Component;
