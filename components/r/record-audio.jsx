import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxqk-t0bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxqk-t0bd"/>`,
		"fallback": "uil:record-audio",
	});
}

export default Component;
