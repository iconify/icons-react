import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d5hymobbd.css';
import '../../css/x/xzlyzjegv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="d5hymobbd"/><path class="xzlyzjegv"/></g>`,
		"fallback": "icon-park-solid:lemon",
	});
}

export default Component;
