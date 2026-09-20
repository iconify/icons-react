import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz64bdwqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz64bdwqp"/>`,
		"fallback": "simple-icons:tokyometro",
	});
}

export default Component;
