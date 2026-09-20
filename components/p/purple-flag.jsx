import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sotbp4b5s.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sotbp4b5s"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:purple-flag",
	});
}

export default Component;
