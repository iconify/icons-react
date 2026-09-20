import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du2s2hbvi.css';
import '../../css/p/p6bj_kbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du2s2hbvi"/><path class="p6bj_kbsm"/>`,
		"fallback": "streamline-freehand:shape-pyramid",
	});
}

export default Component;
