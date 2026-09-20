import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br4vbfewf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br4vbfewf"/>`,
		"fallback": "mdi:thermometer-check",
	});
}

export default Component;
