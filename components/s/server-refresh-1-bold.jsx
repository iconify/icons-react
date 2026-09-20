import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyw7qtbor.css';
import '../../css/g/g-an08bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyw7qtbor"/><path class="g-an08bkq"/>`,
		"fallback": "streamline-ultimate:server-refresh-1-bold",
	});
}

export default Component;
