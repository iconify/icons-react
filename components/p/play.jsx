import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo4cnk_9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo4cnk_9l"/>`,
		"fallback": "vadivam:play",
	});
}

export default Component;
