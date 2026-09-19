import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkjj-r62d.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkjj-r62d"/>`,
		"fallback": "ps:mixx-alt",
	});
}

export default Component;
