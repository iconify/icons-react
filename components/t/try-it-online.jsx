import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn4iohb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn4iohb7d"/>`,
		"fallback": "thesvg:try-it-online",
	});
}

export default Component;
