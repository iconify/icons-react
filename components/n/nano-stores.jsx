import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb11dvb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb11dvb7e"/>`,
		"fallback": "thesvg-color:nano-stores",
	});
}

export default Component;
