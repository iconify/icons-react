import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rk-uz4zdk.css';
import '../../css/w/w0dfylevz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rk-uz4zdk"/><path class="w0dfylevz"/></g>`,
		"fallback": "withicons:signal-sketch",
	});
}

export default Component;
