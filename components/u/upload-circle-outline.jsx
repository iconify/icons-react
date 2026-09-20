import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi6tq537p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi6tq537p"/>`,
		"fallback": "mdi:upload-circle-outline",
	});
}

export default Component;
