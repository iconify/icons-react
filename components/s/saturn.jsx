import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgj_d1b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgj_d1b6c"/>`,
		"fallback": "thesvg-color:saturn",
	});
}

export default Component;
