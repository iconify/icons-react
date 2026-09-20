import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiy6cs5ry.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiy6cs5ry"/>`,
		"fallback": "pinhead:squat-rock-with-inscription",
	});
}

export default Component;
