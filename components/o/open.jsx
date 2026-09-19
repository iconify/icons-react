import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9q94dj6v.css';

const viewBox = {"width":16,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9q94dj6v"/>`,
		"fallback": "formkit:open",
	});
}

export default Component;
