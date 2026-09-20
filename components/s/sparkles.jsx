import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eth0z0b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eth0z0b8p"/>`,
		"fallback": "tabler:sparkles",
	});
}

export default Component;
