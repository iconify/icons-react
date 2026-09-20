import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4n86ab4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4n86ab4e"/>`,
		"fallback": "streamline-ultimate:scooter-3",
	});
}

export default Component;
