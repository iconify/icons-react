import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buyn9_bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buyn9_bcz"/>`,
		"fallback": "mdi:train-car-passenger-door",
	});
}

export default Component;
