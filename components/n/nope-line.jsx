import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izv7wshkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izv7wshkq"/>`,
		"fallback": "si:nope-line",
	});
}

export default Component;
