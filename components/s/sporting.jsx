import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/gnkx5hbtb.css';
import '../../css/s/stjoksb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="gnkx5hbtb"/><path class="stjoksb_i"/></g>`,
		"fallback": "icon-park-solid:sporting",
	});
}

export default Component;
