import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v49jdyi_r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v49jdyi_r"/>`,
		"fallback": "streamline-flex:snooze",
	});
}

export default Component;
