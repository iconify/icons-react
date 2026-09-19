import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o-op5h98v.css';
import '../../css/d/d8ik5ij4p.css';
import '../../css/d/dejs93-4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="o-op5h98v"/><path class="d8ik5ij4p"/><path class="dejs93-4n"/></g>`,
		"fallback": "icon-park:thermometer",
	});
}

export default Component;
