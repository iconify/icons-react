import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixu4zybsc.css';
import '../../css/a/a23i8nphm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixu4zybsc"/><path class="a23i8nphm"/>`,
		"fallback": "fxemoji:nopedestrians",
	});
}

export default Component;
