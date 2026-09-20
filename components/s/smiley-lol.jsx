import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_guezvh.css';
import '../../css/x/xkpdq495a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae_guezvh"/><path class="xkpdq495a"/>`,
		"fallback": "streamline-freehand:smiley-lol",
	});
}

export default Component;
