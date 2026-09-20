import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i64g3g2nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i64g3g2nn"/>`,
		"fallback": "ri:progress-7-fill",
	});
}

export default Component;
