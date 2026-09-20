import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzbyqpwtr.css';
import '../../css/z/z1lb-fcmz.css';
import '../../css/y/yn9mzqbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzbyqpwtr"/><path class="z1lb-fcmz"/><path class="yn9mzqbdd"/>`,
		"fallback": "streamline-freehand:mobile-phone-write",
	});
}

export default Component;
