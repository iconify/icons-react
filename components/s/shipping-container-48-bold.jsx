import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huq5bhbzx.css';
import '../../css/j/javtcmypx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huq5bhbzx"/><path class="javtcmypx"/>`,
		"fallback": "energy-icons:shipping-container-48-bold",
	});
}

export default Component;
