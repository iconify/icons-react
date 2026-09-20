import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z7td259qz.css';
import '../../css/m/mncdzymto.css';
import '../../css/g/gnbqwj8kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z7td259qz"/><path class="mncdzymto"/><path class="gnbqwj8kq"/></g>`,
		"fallback": "streamline-freehand:show-theater-drama",
	});
}

export default Component;
