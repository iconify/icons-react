import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj586r4go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj586r4go"/>`,
		"fallback": "thesvg:intigriti",
	});
}

export default Component;
