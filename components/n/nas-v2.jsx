import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obxvvdc0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obxvvdc0q"/>`,
		"fallback": "cbi:nas-v2",
	});
}

export default Component;
