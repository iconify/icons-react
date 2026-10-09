import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2xmtbjn.css';
import '../../css/l/lajtdm1vq.css';
import '../../css/m/m3eum-q9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2xmtbjn"/><path class="lajtdm1vq"/><path class="m3eum-q9t"/>`,
		"fallback": "energy-icons:plus-square-48",
	});
}

export default Component;
