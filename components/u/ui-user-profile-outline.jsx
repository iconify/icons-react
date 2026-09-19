import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r6azoyibr.css';
import '../../css/i/iyhg_zbla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r6azoyibr"/><path class="iyhg_zbla"/></g>`,
		"fallback": "healthicons:ui-user-profile-outline",
	});
}

export default Component;
