import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g10l5m80q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g10l5m80q"/>`,
		"fallback": "mdi:video-minus",
	});
}

export default Component;
