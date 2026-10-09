import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rujg4eaav.css';
import '../../css/q/qrumt6bsf.css';
import '../../css/z/z0tcujbqr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rujg4eaav"/><path class="qrumt6bsf"/><path class="z0tcujbqr"/>`,
		"fallback": "energy-icons:refresh-ccw-20",
	});
}

export default Component;
