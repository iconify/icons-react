import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sno_jmu9n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sno_jmu9n"/>`,
		"fallback": "simple-line-icons:mustache",
	});
}

export default Component;
