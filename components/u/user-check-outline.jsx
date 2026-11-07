import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vob1vf30q.css';
import '../../css/c/cttr9cbpd.css';
import '../../css/h/hz2a1g29i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vob1vf30q"/><path class="cttr9cbpd"/><path clip-rule="evenodd" class="hz2a1g29i"/>`,
		"fallback": "solar:user-check-outline",
	});
}

export default Component;
