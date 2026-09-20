import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo753mubx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo753mubx"/>`,
		"fallback": "la:poop-solid",
	});
}

export default Component;
