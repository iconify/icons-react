import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/aw60xcbpb.css';
import '../../css/x/x8p7rvb4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="aw60xcbpb"/><path class="x8p7rvb4g"/></g>`,
		"fallback": "icon-park-outline:sport",
	});
}

export default Component;
