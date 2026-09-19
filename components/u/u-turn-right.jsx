import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ytyivubup.css';
import '../../css/g/gieyr613j.css';
import '../../css/j/jwc8ycblh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ytyivubup"/><path class="gieyr613j"/><circle class="jwc8ycblh"/></g>`,
		"fallback": "icon-park-solid:u-turn-right",
	});
}

export default Component;
