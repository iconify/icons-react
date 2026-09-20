import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihb7gccby.css';
import '../../css/z/zau8vgbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihb7gccby"/><path class="zau8vgbnl"/>`,
		"fallback": "streamline-freehand:power-supply-plug",
	});
}

export default Component;
