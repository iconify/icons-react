import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4xrj7b1v.css';
import '../../css/f/fxwu97ass.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4xrj7b1v"/><path class="fxwu97ass"/>`,
		"fallback": "selfhst:timetagger",
	});
}

export default Component;
