import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_erx965q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_erx965q"/>`,
		"fallback": "streamline-ultimate:small-office-briefcase-bold",
	});
}

export default Component;
