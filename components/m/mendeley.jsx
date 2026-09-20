import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfac0l_-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfac0l_-s"/>`,
		"fallback": "thesvg:mendeley",
	});
}

export default Component;
