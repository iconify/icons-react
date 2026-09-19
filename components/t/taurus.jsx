import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f2c8bvbnp.css';
import '../../css/a/a_r8tk11v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="f2c8bvbnp"/><path class="a_r8tk11v"/></g>`,
		"fallback": "icon-park-solid:taurus",
	});
}

export default Component;
