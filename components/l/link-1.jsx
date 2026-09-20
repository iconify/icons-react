import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ustgjj26u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ustgjj26u"/>`,
		"fallback": "tdesign:link-1",
	});
}

export default Component;
