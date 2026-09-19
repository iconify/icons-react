import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdovg_p_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdovg_p_h"/>`,
		"fallback": "game-icons:jumping-rope",
	});
}

export default Component;
