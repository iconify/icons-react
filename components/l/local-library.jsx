import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tprn2zk0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tprn2zk0q"/>`,
		"fallback": "mdi:local-library",
	});
}

export default Component;
