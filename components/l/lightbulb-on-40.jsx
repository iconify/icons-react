import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dybmcdqlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dybmcdqlp"/>`,
		"fallback": "mdi:lightbulb-on-40",
	});
}

export default Component;
