import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrad-pw_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrad-pw_e"/>`,
		"fallback": "thesvg-color:vencord",
	});
}

export default Component;
