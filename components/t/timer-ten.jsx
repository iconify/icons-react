import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adj7ecb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adj7ecb1t"/>`,
		"fallback": "mdi:timer-ten",
	});
}

export default Component;
