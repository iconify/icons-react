import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki5tbvs4d.css';
import '../../css/l/l_t0o44wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki5tbvs4d"/><path class="l_t0o44wt"/>`,
		"fallback": "streamline-ultimate:messages-people-person-bubble-circle-1-bold",
	});
}

export default Component;
