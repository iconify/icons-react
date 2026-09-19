import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeq7jyr0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeq7jyr0l"/>`,
		"fallback": "cbi:sonos-arc",
	});
}

export default Component;
