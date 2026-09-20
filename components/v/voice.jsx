import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtl_pwb1c.css';
import '../../css/b/bp9bjib7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xtl_pwb1c"/><path class="bp9bjib7a"/>`,
		"fallback": "token:voice",
	});
}

export default Component;
