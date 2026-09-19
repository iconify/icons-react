import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j6ia51asj.css';
import '../../css/x/xzlyzjegv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="j6ia51asj"/><path class="xzlyzjegv"/></g>`,
		"fallback": "icon-park-outline:lemon",
	});
}

export default Component;
