import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0y6ou17w.css';
import '../../css/m/ma9kh6yyc.css';
import '../../css/x/xd35sxcdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0y6ou17w"/><path class="ma9kh6yyc"/><path class="xd35sxcdc"/>`,
		"fallback": "energy-icons:record-player-48",
	});
}

export default Component;
