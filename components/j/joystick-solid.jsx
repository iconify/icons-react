import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twadonbqo.css';
import '../../css/u/umps_z5qj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twadonbqo"/><path class="umps_z5qj"/>`,
		"fallback": "teenyicons:joystick-solid",
	});
}

export default Component;
