import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8r7mgbbj.css';
import '../../css/s/stjoksb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="r8r7mgbbj"/><path class="stjoksb_i"/></g>`,
		"fallback": "icon-park-outline:sporting",
	});
}

export default Component;
