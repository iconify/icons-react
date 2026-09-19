import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pqvkjslfz.css';
import '../../css/j/jjiany4ql.css';
import '../../css/q/qxq43kb0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="pqvkjslfz"/><path class="jjiany4ql"/><path class="qxq43kb0f"/></g>`,
		"fallback": "icon-park-outline:shaver",
	});
}

export default Component;
