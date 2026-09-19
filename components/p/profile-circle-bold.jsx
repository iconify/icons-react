import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x27p4124y.css';
import '../../css/x/x6rm5orrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x27p4124y"/><path class="x6rm5orrz"/></g>`,
		"fallback": "iconamoon:profile-circle-bold",
	});
}

export default Component;
