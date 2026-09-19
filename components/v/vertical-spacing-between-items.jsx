import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xqydo_e_x.css';
import '../../css/z/zjj1q_b2i.css';
import '../../css/z/zcesgib0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="xqydo_e_x"/><path class="zjj1q_b2i"/><path class="zcesgib0l"/></g>`,
		"fallback": "icon-park:vertical-spacing-between-items",
	});
}

export default Component;
