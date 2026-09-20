import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr4mq5bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr4mq5bkp"/>`,
		"fallback": "ri:play-fill",
	});
}

export default Component;
