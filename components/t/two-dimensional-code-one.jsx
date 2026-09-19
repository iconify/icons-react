import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yaq8wsbts.css';
import '../../css/n/n98ciob7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="yaq8wsbts"/><path class="n98ciob7o"/></g>`,
		"fallback": "icon-park-solid:two-dimensional-code-one",
	});
}

export default Component;
