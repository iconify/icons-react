import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6an7pvvv.css';
import '../../css/b/b17e7nbsz.css';
import '../../css/u/uyd0dabdt.css';
import '../../css/o/ocywhlbwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6an7pvvv"/><path class="b17e7nbsz"/><path class="uyd0dabdt"/><path class="ocywhlbwe"/>`,
		"fallback": "energy-icons:solar-battery-48",
	});
}

export default Component;
