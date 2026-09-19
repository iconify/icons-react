import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcmiioc2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcmiioc2q"/>`,
		"fallback": "icon-park-outline:loading-three",
	});
}

export default Component;
