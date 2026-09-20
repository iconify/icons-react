import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uumr8ibws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uumr8ibws"/>`,
		"fallback": "tabler:social-off",
	});
}

export default Component;
