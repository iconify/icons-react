import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaxv-gbpo.css';
import '../../css/x/xp00lybfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaxv-gbpo"/><path class="xp00lybfm"/>`,
		"fallback": "bx:right-down-arrow-circle",
	});
}

export default Component;
