import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6cvwtbsp.css';
import '../../css/r/r4a32cb3q.css';
import '../../css/r/raz-mzj-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6cvwtbsp"/><path class="r4a32cb3q"/><path class="raz-mzj-z"/>`,
		"fallback": "energy-icons:seabed-habitat-48-bold",
	});
}

export default Component;
