import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/r/rzfb99nxx.css';
import '../../css/y/yxmj3fb4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="rzfb99nxx"/><path class="yxmj3fb4o"/></g>`,
		"fallback": "icon-park:right-branch-one",
	});
}

export default Component;
