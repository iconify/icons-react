import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irg2cubto.css';
import '../../css/y/yzp037bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irg2cubto"/><path class="yzp037bcp"/>`,
		"fallback": "prime:map-marker",
	});
}

export default Component;
