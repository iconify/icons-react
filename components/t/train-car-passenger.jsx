import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r55r7ibth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r55r7ibth"/>`,
		"fallback": "mdi:train-car-passenger",
	});
}

export default Component;
