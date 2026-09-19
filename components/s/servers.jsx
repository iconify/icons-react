import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijy3k1pdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijy3k1pdy"/>`,
		"fallback": "humbleicons:servers",
	});
}

export default Component;
