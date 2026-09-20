import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjhkzid7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjhkzid7u"/>`,
		"fallback": "streamline-ultimate:skiing-snow-scooter-person",
	});
}

export default Component;
