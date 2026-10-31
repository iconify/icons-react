import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jb3ap4bhw.css';
import '../../css/o/o0h_-bcbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jb3ap4bhw"/><path class="o0h_-bcbt"/></g>`,
		"fallback": "coolicons:joystick-duocolor-round",
	});
}

export default Component;
