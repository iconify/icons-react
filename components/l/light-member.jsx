import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l4o2qpb4m.css';
import '../../css/t/tqg4a-7db.css';
import '../../css/q/qkenzxbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l4o2qpb4m"/><path class="tqg4a-7db"/><path class="qkenzxbrz"/></g>`,
		"fallback": "icon-park-outline:light-member",
	});
}

export default Component;
