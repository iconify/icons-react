import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fm3ditb9p.css';
import '../../css/l/lhfm-abhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fm3ditb9p"/><circle class="lhfm-abhu"/></g>`,
		"fallback": "icon-park-solid:stapler",
	});
}

export default Component;
