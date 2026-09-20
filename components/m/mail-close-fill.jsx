import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urr3lhbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urr3lhbsp"/>`,
		"fallback": "ri:mail-close-fill",
	});
}

export default Component;
