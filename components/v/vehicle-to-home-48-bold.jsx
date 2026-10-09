import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv1v2qimq.css';
import '../../css/x/x0zjy2t6m.css';
import '../../css/e/e39a7buae.css';
import '../../css/c/cjnszo8hf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv1v2qimq"/><path class="x0zjy2t6m"/><path class="e39a7buae"/><path class="cjnszo8hf"/>`,
		"fallback": "energy-icons:vehicle-to-home-48-bold",
	});
}

export default Component;
