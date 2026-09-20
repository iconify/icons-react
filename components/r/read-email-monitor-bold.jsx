import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km7s_km6t.css';
import '../../css/y/ygu8evkrm.css';
import '../../css/d/dzn4brbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km7s_km6t"/><path class="ygu8evkrm"/><path class="dzn4brbyr"/>`,
		"fallback": "streamline-ultimate:read-email-monitor-bold",
	});
}

export default Component;
