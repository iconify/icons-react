import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_nfahbsi.css';
import '../../css/p/py667bcgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_nfahbsi"/><path class="py667bcgv"/>`,
		"fallback": "energy-icons:tabs-48-bold",
	});
}

export default Component;
