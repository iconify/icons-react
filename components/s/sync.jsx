import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/k0nmi6med.css';
import '../../css/n/nlrhegbqn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="k0nmi6med"/><path class="nlrhegbqn"/></g>`,
		"fallback": "icon-park:sync",
	});
}

export default Component;
