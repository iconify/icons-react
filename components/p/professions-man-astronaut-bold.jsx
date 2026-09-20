import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0bkqib-z.css';
import '../../css/h/h9ba1ntbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0bkqib-z"/><path class="h9ba1ntbw"/>`,
		"fallback": "streamline-ultimate:professions-man-astronaut-bold",
	});
}

export default Component;
