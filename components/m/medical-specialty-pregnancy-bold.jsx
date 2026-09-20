import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_9pn8b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_9pn8b4m"/>`,
		"fallback": "streamline-ultimate:medical-specialty-pregnancy-bold",
	});
}

export default Component;
