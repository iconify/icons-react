import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyg283b4l.css';
import '../../css/h/hish2dbhf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyg283b4l"/><path class="hish2dbhf"/>`,
		"fallback": "oui:sparkle-filled",
	});
}

export default Component;
