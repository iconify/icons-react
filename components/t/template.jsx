import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv5f_v8gl.css';
import '../../css/m/mpb976b_h.css';
import '../../css/m/mbjqfdc5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv5f_v8gl"/><path class="mpb976b_h"/><path class="mbjqfdc5s"/>`,
		"fallback": "flat-color-icons:template",
	});
}

export default Component;
