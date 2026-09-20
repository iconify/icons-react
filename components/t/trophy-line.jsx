import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjy069u9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjy069u9v"/>`,
		"fallback": "ri:trophy-line",
	});
}

export default Component;
