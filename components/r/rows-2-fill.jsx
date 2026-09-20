import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf9euj_4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf9euj_4l"/>`,
		"fallback": "mingcute:rows-2-fill",
	});
}

export default Component;
