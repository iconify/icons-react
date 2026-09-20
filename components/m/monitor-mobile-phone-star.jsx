import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leul54bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leul54bmw"/>`,
		"fallback": "mdi:monitor-mobile-phone-star",
	});
}

export default Component;
