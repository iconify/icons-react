import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evohz4o-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evohz4o-o"/>`,
		"fallback": "ri:slash-commands",
	});
}

export default Component;
