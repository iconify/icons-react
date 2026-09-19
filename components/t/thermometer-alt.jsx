import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roqo4bagl.css';
import '../../css/d/d9--onbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roqo4bagl"/><path class="d9--onbip"/>`,
		"fallback": "fontisto:thermometer-alt",
	});
}

export default Component;
