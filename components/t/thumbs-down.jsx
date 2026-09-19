import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwe5dkr3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwe5dkr3d"/>`,
		"fallback": "fa-solid:thumbs-down",
	});
}

export default Component;
