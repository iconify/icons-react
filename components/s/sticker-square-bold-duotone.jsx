import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysujvx2kd.css';
import '../../css/q/qtfjj6b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysujvx2kd"/><path class="qtfjj6b3v"/>`,
		"fallback": "solar:sticker-square-bold-duotone",
	});
}

export default Component;
