import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-s9v8b6o.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-s9v8b6o"/>`,
		"fallback": "ps:steam",
	});
}

export default Component;
