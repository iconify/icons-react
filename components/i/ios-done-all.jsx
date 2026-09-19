import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf8i4wb_q.css';
import '../../css/h/hn3vxocrc.css';
import '../../css/m/mhn7bwbtp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf8i4wb_q"/><path class="hn3vxocrc"/><path class="mhn7bwbtp"/>`,
		"fallback": "ion:ios-done-all",
	});
}

export default Component;
