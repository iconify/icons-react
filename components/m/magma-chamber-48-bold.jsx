import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pivyf-bap.css';
import '../../css/e/eo4t4pbyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pivyf-bap"/><path class="eo4t4pbyn"/>`,
		"fallback": "energy-icons:magma-chamber-48-bold",
	});
}

export default Component;
