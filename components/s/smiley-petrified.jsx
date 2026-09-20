import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6fnyrbeo.css';
import '../../css/p/pd0f2kbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6fnyrbeo"/><path class="pd0f2kbvo"/>`,
		"fallback": "streamline-freehand:smiley-petrified",
	});
}

export default Component;
