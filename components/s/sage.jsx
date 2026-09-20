import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t22_x14sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t22_x14sf"/>`,
		"fallback": "thesvg:sage",
	});
}

export default Component;
