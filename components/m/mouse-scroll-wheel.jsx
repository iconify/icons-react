import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn6jadbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn6jadbje"/>`,
		"fallback": "mdi:mouse-scroll-wheel",
	});
}

export default Component;
