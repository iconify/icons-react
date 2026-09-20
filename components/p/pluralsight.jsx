import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hktm_9eaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hktm_9eaw"/>`,
		"fallback": "thesvg-color:pluralsight",
	});
}

export default Component;
