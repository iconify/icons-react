import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hajiifygo.css';
import '../../css/a/a185onbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hajiifygo"/><path class="a185onbwq"/>`,
		"fallback": "streamline-freehand:light-spotlight-1",
	});
}

export default Component;
