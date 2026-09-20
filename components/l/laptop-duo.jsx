import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/l/lko68fbep.css';
import '../../css/d/dvaawx62e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="lko68fbep"/><path class="dvaawx62e"/></g>`,
		"fallback": "streamline-kameleon-color:laptop-duo",
	});
}

export default Component;
