import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgsilxb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgsilxb1g"/>`,
		"fallback": "mdi:jolly-roger",
	});
}

export default Component;
