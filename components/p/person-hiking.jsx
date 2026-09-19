import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0a3f7ftz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0a3f7ftz"/>`,
		"fallback": "fa6-solid:person-hiking",
	});
}

export default Component;
