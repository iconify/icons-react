import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttme2kbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttme2kbhq"/>`,
		"fallback": "mdi:safety-googles",
	});
}

export default Component;
