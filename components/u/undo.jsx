import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n5dxrsa3b.css';
import '../../css/o/omor4un3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n5dxrsa3b"/><path class="omor4un3n"/></g>`,
		"fallback": "icon-park:undo",
	});
}

export default Component;
