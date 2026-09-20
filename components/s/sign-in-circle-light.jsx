import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzxwr6bsa.css';
import '../../css/x/xp1qqzz2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xzxwr6bsa"/><path class="xp1qqzz2a"/></g>`,
		"fallback": "lets-icons:sign-in-circle-light",
	});
}

export default Component;
