import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltz0s7b4l.css';
import '../../css/x/x15y2eb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltz0s7b4l"/><path class="x15y2eb4s"/>`,
		"fallback": "token:jst",
	});
}

export default Component;
