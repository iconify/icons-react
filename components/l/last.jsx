import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1qxa2w7a.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1qxa2w7a"/>`,
		"fallback": "ps:last",
	});
}

export default Component;
