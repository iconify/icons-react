import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk9wetb5e.css';
import '../../css/d/dn45p3vty.css';
import '../../css/j/j2msh4wvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk9wetb5e"/><path class="dn45p3vty"/><path class="j2msh4wvh"/></g>`,
		"fallback": "tdesign:map-collection",
	});
}

export default Component;
