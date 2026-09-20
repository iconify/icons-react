import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu70gxb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu70gxb8a"/>`,
		"fallback": "mdi:pill-bottle",
	});
}

export default Component;
