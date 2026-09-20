import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evbp3eb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evbp3eb0f"/>`,
		"fallback": "mdi:vector-link",
	});
}

export default Component;
