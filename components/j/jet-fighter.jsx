import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m19nw0dzp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m19nw0dzp"/>`,
		"fallback": "fa6-solid:jet-fighter",
	});
}

export default Component;
