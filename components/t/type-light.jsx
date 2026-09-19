import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr8kzw2nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr8kzw2nn"/>`,
		"fallback": "iconamoon:type-light",
	});
}

export default Component;
